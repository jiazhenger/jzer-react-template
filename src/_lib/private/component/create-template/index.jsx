import React from 'react'
/* -------------------------------------------------------- Sync Component -- */
import getJSON from './utils/getJSON'
import backJSON from './utils/backJSON'
import Copy from '@utils/copy'
/* -------------------------------------------------------- Declare -- */
const { $lazy, $fn, $http } = window
/* -------------------------------------------------------- Async Component -- */
const Page = $lazy.load(()=>import('#tp/content/page-content.jsx'))
const Button = $lazy.load(()=>import('@antd/button.jsx'))
const Input = $lazy.load(()=>import('@antd/form/input.jsx'))
const Select = $lazy.load(()=>import('@antd/form/select.jsx'))
const Switch = $lazy.load(()=>import('@antd/form/switch.jsx'))
const Checkbox = $lazy.load(()=>import('@antd/form/checkbox.jsx'))
/* -------------------------------------------------------- Data -- */
const dataType = [{ label:'字符串', value:'string' }, { label:'数字', value:'number' }, { label:'布尔值', value:'bool' }]
/* -------------------------------------------------------- Page Component -- */
const Index = ({ data, component, option }) => {
	const [ result, setResult ] = React.useState($fn.deepCopy(data))
	const [ showName, setShowName ] = React.useState(false)
	const [ key, setKey ] = React.useState(0)
	const [ addKey, setAddKey ] = React.useState(0)
	const [ selectKey, setSelectKey] = React.useState(0)
	const Title = ({ name, title }) => <h6 style={{minWidth:120,margin:'0 5px 0 0'}} className='h28 tr f12 g6' title={title}>{name}<i className='g9 ml5'>:</i></h6>
	/* ========================================================================================= */
	const param = React.useRef({})
	React.useEffect(()=>{
		if(option?.getApi){
			const { id } = $fn.query()
			$http.pull(null,option?.getApi, { id, loading:true }).then(data=>{
				param.current = data
				if($fn.hasObject(data?.wetSetting)){
					try{
						setResult( d => [...backJSON(data.wetSetting, d)] )
					}catch(e){
						$fn.msg.error('JSON 格式不正确，请检查')
					}
				}else{
					setResult( d => [...backJSON($fn.local('templateConfig'), d)] )
				}
			})
		}else{
			setResult( d => [...backJSON($fn.local('templateConfig'), d)] )
		}
	},[ option ])
	/* ========================================================================================= */
	// 缓存
	const save = React.useCallback(()=>setTimeout(()=>$fn.local('templateConfig', getJSON(result)), 200), [ result ])
	// 排序
	const getSortData = data=> {
		const d = Array.from({ length: data.length }, (value, index) => ({ label:index+1, value: index+1 }))
		return d
	}
	// 编辑 Function
	const onFunc = (row) => {
		const isAdd = $fn.isEmpty(row.value)
		window.$modalRef().open({
			title 		: '编写 JS',
			width		: '99%',
			height 		: '99%',
			slot 		: (
				<div className='rel wh bcf p10'>
					<textarea spellCheck={false} className='bor1 wh p10 lh22 r5px' id='jsCodeTarget' style={{background:'#fdf7f2'}}/>
				</div>
			),
			style		: {background:'#f5f5f5', padding:5},
			onOpen : () => {
				if(!isAdd) document.querySelector('#jsCodeTarget').value = row.value
			},
			onCancel 	: () => true,
			onOk 		: () => {
				row.value = document.querySelector('#jsCodeTarget').value
				save()
				return true
			},
			controls: {
				ok: { label:'保存' },
				after: [
					{ label:'清空', ghost:1, click:()=> {
						document.querySelector('#jsCodeTarget').value=''
						save()
					}  }
				]
			}
		})
	}
	// 更新数据
	const update = React.useCallback(()=>{
		setResult( [...result] )
		save()
	},[save, result])
	const color = ['red', '#ccc', 'blue']
	// 事件按钮
	const EventButton = ({ row }) => <Button size='mini' ghost mode={$fn.isEmpty(row?.value)?'mod':'add'} label={`${$fn.isEmpty(row?.value)?'添加':'编写'}事件`} style={{height:22}} onClick={()=>onFunc(row)}/>
	// 组件递归
	const DeepComponent = ({ data, index = 0, hasChildren, open, isOpen, show, isTwo, isObjectData, isArray }) => {
		const style = hasChildren ? {border:`1px ${open ? 'red' : color[index-1]} dotted`, padding:10, borderRadius: 5} : null
		index ++
		if(index === 1){ hasChildren = false } 
		return (
			<ul key={key} className={`${ (isTwo || (!isTwo && isArray && open!==true) || (isOpen && open!==true)) ? 'fx' : 'fv'}  ex`} hidden={show!==true} style={{ gap:5, marginLeft: 45 * (index-1), ...style}}>
				{
					$fn.hasArray(data) && data.map((v,i)=>{
						const prop = {
							value: v.value,
							onChange: value => {
								v.value = value
								save()
							}
						}
						let Element = (<div className='fxm ex'>
							<Input className='ex' {...prop}/>
							{(isObjectData && v.key==='value') && <div className='ml10'><Select width={85} hint='' value={v.dataType} label='数据类型' data={dataType} onChange={value=>{
								v.dataType = value
								save()
							}}/></div>}
						</div>)
						switch(v.type){
							case 'number':
								Element = <Input type='number' className='ex' {...prop}/>
								break
							case 'select':
								Element = <Select className='ex' {...prop} width={160} data={v.data}/>
								break
							case 'switch':
								Element = <Switch {...prop} />
								break
							case 'function':
								Element = <EventButton row={v}/>
								break
							case 'jsx':
								Element = <div className='g9 f12 h28'>仅代码中配置</div>
								break
							default:
						}
						const hidden = open !== true && ((!isTwo && isArray) || isOpen)
						const Component = v.children ? (
							<li hidden={v.isLabelValueData || hidden}>
								<div className='fxm'>
									<Title name={showName ? v.key : v.title} title={v.key} />
									<div className='fxm'>
										<Checkbox value={v.add} label='添加' disabled={v.children.length === 0} bool onChange={value=>{
											v.add = value
											v.show = value
											update()
										}}/>
										<Checkbox value={v.show} label='展开' disabled={v.children.length === 0} bool onChange={value=>{
											v.show = value
											update()
										}}/>
										{v.isLabelValueData && <div hidden={!v.show} className='mr10'><Select width={85} value={v.dataType} hint='' label='数据类型' data={dataType} onChange={value=>{
											v.dataType = value
										}}/></div>}
										{
											(index > 1 && v.addData) && (
												<>
													<Button size='mini' label='添加' style={{height:22}} onClick={()=>{
														if(v.children.length === 0){
															v.children.push($fn.deepCopy(v.addData))
															v.show = true
															v.add = true
														}else{
															if(v.show){
																v.children.push($fn.deepCopy(v.addData))
																setAddKey(k=>k+1)
															}else{
																v.show = true
															}
														}
														update()
													}}/>
													<Button size='mini' label='清空' ghost className='mlr10' style={{height:22}} onClick={()=>{
														v.children = []
														v.show = false
														v.add = false
														update()
													}}/>
												</>
											)
										}
										{
											v.isFunction && <EventButton row={v}/>
										}
									</div>
								</div>
								{
									v.children && (
										$fn.isObject( v.children?.[0] ) ? (
											<div className={v.isOpen && v.open!==true ? 'fxm' : 'fx'} style={{gap:5}}>
												{ DeepComponent({ data:v.children, hasChildren:true, index, open:v.open, isOpen:v.isOpen, isArray:v.isArray, show:v.show, isTwo:v.isTwo, isObjectData:v.isObjectData }) }
												{v.isOpen && <Button size='mini' hidden={v.show !== true} style={{height:22}} label={v.open?'收缩':'展开'} onClick={()=>{
													v.open = !v.open
													update()
												}}/>}
											</div>
										) : (
											<div className='fv rel' style={{gap:5}} key={addKey} hidden={v.show !== true}>
												{
													v.children.map((m,k)=> (
														<div key={k} className={` rel ${v.isTwo ? 'fxm' : 'fx'}`}>
															{ DeepComponent({ data:m, hasChildren: true, index, open:m.open, isOpen:v.isOpen, isArray:v.isArray, show:v.show, isTwo:v.isTwo, isObjectData:v.isObjectData }) }
															<div className={`ml10 ${v.isTwo || (m.open!==true && v.isArray) ? 'fxm' : 'fv'}`} style={{gap:5}}>
																<Button size='mini' style={{height:22}} label='删除' onClick={()=>{
																	v.children.splice(k, 1)
																	if(v.children.length === 0){
																		v.add = false
																		v.show =false
																	}
																	update()
																	setAddKey(k => k - 1)
																}}/>
																{!v.isTwo && <Button size='mini' style={{height:22}} label={m.open?'收缩':'展开'} onClick={()=>{
																	m.open = !m.open
																	update()
																}}/>}
																<Select p='排序' key={selectKey} value={k+1} width={60} antd={{showSearch:false}} allowClear={false} data={getSortData(v.children)} onChange={value=>{
																	v.children.splice( k, 1 )
																	v.children.splice( value - 1, 0, m )
																	update()
																	setSelectKey(k=>k+1)
																}} />
															</div>
														</div>
													))
												}
											</div>
										)
									)
								}
							</li>
						) : (
							<li hidden={i>2 && hidden} className={`fxm ${isTwo || hidden ? 'ex' : ''}`}>
								<Title name={showName ? v.key : v.title}  title={v.key}/>
								{ Element }
							</li>
						)
						return <React.Fragment key={i}>{ Component }</React.Fragment>
					})
				}
			</ul>
		)
	}
	const pageConfig = {
		title: '生成模板数据',
		scroll: true,
		contentClass: 'p10 jzer-form-small',
		controls: [
			{ label:'清空缓存', ghost:1, click:()=> {
				$fn.localRemove('templateConfig')
				setResult($fn.deepCopy(data))
				setKey(key => key + 1)
			} },
			{ label:'显示字段名', ghost:1, click:()=> setShowName(v=>!v) },
			option?.createJson ? { label:'生成 JSON', click(){
				const json = getJSON(result)
				window.$modalRef().open({
					title 		: '生成 JSON',
					width		: '80%',
					height 		: '80%',
					slot 		: (
						<div className='rel wh bcf p10'>
							<textarea spellCheck={false} className='bor1 wh p10 lh22 r5px' id='copyTarget' onChange={()=>{}} style={{background:'#fdf7f2'}} value={JSON.stringify(json, null,'\t')}/>
						</div>
					),
					style		: {background:'#f5f5f5', padding:5},
					onCancel 	: close => true,
					controls: { ok:{ label:'复制', click:()=>Copy(document.querySelector('#copyTarget').value) } },
				})
			} } : null,
			option?.importJson ? { label:'导入 JSON', click(){
				window.$modalRef().open({
					title 		: '生成 JSON',
					width		: '80%',
					height 		: '80%',
					slot 		: (
						<div className='rel wh bcf p10'>
							<textarea spellCheck={false} placeholder='请输入 JSON' className='bor1 wh p10 lh22 r5px' id='importTarget' style={{background:'#fdf7f2'}}/>
						</div>
					),
					style		: {background:'#f5f5f5', padding:5},
					onCancel 	: close => true,
					controls: { ok:{ label:'导入', click:()=>{
						try{
							const { value } = document.querySelector('#importTarget')
							const json = JSON.parse(value)
							setResult(backJSON(json, $fn.deepCopy(data)))
							$fn.msg.success('导入成功')
							window.$modalRef().close()
						}catch(e){
							$fn.msg.error('JSON 格式不正确，请检查')
						}
					} } },
				})
			} } : null,
			{ label:'预览', click :() =>{
				const json = getJSON(result)
				if(!$fn.hasObject(json)) return $fn.msg.warning('未添加配置')
				window.$modalRef().open({
					title 		: '预览页面',
					slot 		: <div className='rel wh'>{component(json)}</div>,
					full		: true,
					style		: {background:'#f5f5f5', padding:5},
					onCancel 	: close => true,
					controls: { ok:0 }
				})
			} },
			option?.saveApi ? { label:'保存', click(){
				const json = getJSON(result)
				if(!$fn.hasObject(json)) return $fn.msg.warning('未添加配置')
				$http.post(null, option?.saveApi, { param: { ...param.current, [option?.jsonStr ?? 'json']: JSON.stringify(json) } }).then(()=>{
					$fn.msg.success('保存成功')
					$fn.back()
				})
			} } : null,
			option?.back ? { mode:'back' } : null
		]
	}
	return (
		<Page {...pageConfig}>
			{ DeepComponent({ data:result, show:true }) }
		</Page>
	)
}
export default Index