import React from 'react'
const dSize = '50px'
const dColor = '#bfbfbf'
// ===================================================================== public component
const Index = ({ size, color }) => (
	<svg viewBox='0 0 1024 1024' width={size||dSize} height={size||dSize} style={{background:'#fff',borderRadius:'100%'}}>
		<path  fill={color||dColor} d='M511.99999999999983 1023.9999999999999C229.24799999999982 1023.9999999999994-1.1368683772161603e-13 794.7519999999995 0 511.99999999999994S229.2480000000004-1.1368683772161603e-13 512.0000000000001 0s511.9999999999999 229.24800000000036 511.99999999999955 512.0000000000003-229.24800000000036 511.9999999999999-512.0000000000003 511.99999999999955z m6.252776074688882e-13-938.666667C276.352 85.33333299999993 85.33333300000004 276.3519999999998 85.33333299999998 511.9999999999997s191.01866699999982 426.6666670000001 426.66666699999973 426.66666700000025 426.6666670000001-191.01866699999982 426.66666700000025-426.66666699999973S747.6480000000004 85.3333330000001 512.0000000000002 85.33333300000004z m309.8879999999996 627.7973340000001a42.666667 42.666667 0 0 1-58.28266699999999-15.616000000000035l-21.33333299999998-36.94933400000002-258.64533300000005 149.3333339999998a42.666667 42.666667 0 0 1-58.28266699999999-15.616000000000035l-63.99999999999993-110.84800000000001-73.89866700000005 42.66666599999995a42.666667 42.666667 0 0 1-42.66666599999995-73.89866600000006l110.84800000000001-63.99999999999993a42.666667 42.666667 0 0 1 58.28266599999999 15.616000000000039l63.99999999999993 110.84800000000001 258.64533400000005-149.3333339999998a42.666667 42.666667 0 0 1 58.28266599999999 15.616000000000039l42.66666699999996 73.89866700000002a42.666667 42.666667 0 0 1-15.616000000000035 58.28266699999999zM362.66666699999996 512a149.333333 149.333333 0 1 1 1.7053025658242404e-13-298.66666699999996 149.333333 149.333333 0 0 1-1.7053025658242404e-13 298.66666699999996z'></path>
	</svg>
)
export default Index