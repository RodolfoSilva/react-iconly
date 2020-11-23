import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const Notification = ({ color, opacity, secondaryColor, strokeWidth, set }) => {
  const Bold = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M7.983,19.967a3.619,3.619,0,0,1-1.714-.733,1.551,1.551,0,0,1-.7-1.173c0-.5.462-.734.889-.833a25.955,25.955,0,0,1,4.046,0c.427.1.889.329.889.833a1.553,1.553,0,0,1-.695,1.174,3.635,3.635,0,0,1-1.713.732A4,4,0,0,1,8.48,20,3.667,3.667,0,0,1,7.983,19.967ZM3.764,15.747a4.535,4.535,0,0,1-2.9-1.413A3.615,3.615,0,0,1,0,11.956a3.368,3.368,0,0,1,.731-2.31A3.8,3.8,0,0,0,1.794,6.8V6.37A5.625,5.625,0,0,1,3.077,2.512,7.073,7.073,0,0,1,8.456,0h.09a7.041,7.041,0,0,1,5.467,2.624,5.546,5.546,0,0,1,1.2,3.746V6.8a3.889,3.889,0,0,0,1.062,2.849A3.364,3.364,0,0,1,17,11.956a3.614,3.614,0,0,1-.863,2.379,4.539,4.539,0,0,1-2.9,1.413c-1.571.133-3.144.247-4.737.247A41.689,41.689,0,0,1,3.764,15.747Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M16.27,9.645A3.884,3.884,0,0,1,15.207,6.8V6.37a5.546,5.546,0,0,0-1.2-3.746A7.041,7.041,0,0,0,8.544,0H8.456A7.071,7.071,0,0,0,3.077,2.513,5.623,5.623,0,0,0,1.793,6.37V6.8A3.8,3.8,0,0,1,.73,9.645,3.363,3.363,0,0,0,0,11.956a3.608,3.608,0,0,0,.864,2.378,4.532,4.532,0,0,0,2.9,1.413,41.646,41.646,0,0,0,4.737.247c1.593,0,3.164-.113,4.737-.247a4.532,4.532,0,0,0,2.9-1.413A3.614,3.614,0,0,0,17,11.956a3.363,3.363,0,0,0-.73-2.31'
        transform='translate(0)'
        fill={color}
      />
      <path
        d='M4.936.08A25.6,25.6,0,0,0,.89.08C.462.179,0,.408,0,.912A1.55,1.55,0,0,0,.7,2.085h0a3.635,3.635,0,0,0,1.714.732,3.836,3.836,0,0,0,1.008,0A3.636,3.636,0,0,0,5.13,2.086h0a1.55,1.55,0,0,0,.7-1.173c0-.5-.462-.733-.89-.832'
        transform='translate(5.573 17.148)'
        fill={secondaryColor}
        opacity={opacity}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M0,11.787v-.219A3.6,3.6,0,0,1,.6,9.75,4.87,4.87,0,0,0,1.8,7.436c0-.666,0-1.342.058-2.009C2.155,2.218,5.327,0,8.461,0h.078c3.134,0,6.306,2.218,6.617,5.427.058.666,0,1.342.049,2.009A4.955,4.955,0,0,0,16.4,9.759a3.506,3.506,0,0,1,.6,1.809v.209a3.566,3.566,0,0,1-.844,2.39A4.505,4.505,0,0,1,13.3,15.538a45.078,45.078,0,0,1-9.615,0A4.554,4.554,0,0,1,.835,14.167,3.6,3.6,0,0,1,0,11.787Z'
        transform='translate(0 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A3.061,3.061,0,0,0,2.037,1.127,3.088,3.088,0,0,0,4.288.5,2.886,2.886,0,0,0,4.812,0'
        transform='translate(6.055 18.852)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
    </g>
  )

  const Broken = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M5.679,18.618a.756.756,0,0,1,.1-1.069.769.769,0,0,1,1.077.1,2.064,2.064,0,0,0,.418.413,1.987,1.987,0,0,0,2.777-.413h.009a.77.77,0,0,1,1.078-.1.755.755,0,0,1,.1,1.069,3.491,3.491,0,0,1-5.563,0Zm-1.641-2.78A4.834,4.834,0,0,1,.968,14.3,4.079,4.079,0,0,1,0,11.561v-.122a4.207,4.207,0,0,1,.728-2.1L.8,9.248a3.833,3.833,0,0,0,.887-1.76V5.675a.765.765,0,0,1,1.464.158V7.646a.431.431,0,0,1,0,.1,5.26,5.26,0,0,1-1.225,2.446,2.531,2.531,0,0,0-.39,1.25v.194a2.574,2.574,0,0,0,.585,1.715,3.319,3.319,0,0,0,2.076.986,40.05,40.05,0,0,0,8.588,0,3.326,3.326,0,0,0,2.12-1.03,2.543,2.543,0,0,0,.559-1.663v-.2a2.629,2.629,0,0,0-.381-1.258,5.269,5.269,0,0,1-1.3-2.446.584.584,0,0,1,0-.1V5.816c-.257-2.657-2.928-4.3-5.252-4.3a5.76,5.76,0,0,0-2.821.73.769.769,0,0,1-.777.005A.753.753,0,0,1,4.97.924,7.241,7.241,0,0,1,8.465,0c3.069,0,6.512,2.164,6.9,5.64V7.453a3.75,3.75,0,0,0,.887,1.76.747.747,0,0,1,.071.1A4.055,4.055,0,0,1,17,11.36l-.027.184a4.14,4.14,0,0,1-.941,2.754,4.884,4.884,0,0,1-3.123,1.54,40.7,40.7,0,0,1-4.435.242A40.723,40.723,0,0,1,4.038,15.838Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(3.5 2)'>
      <path
        d='M0,11.787v-.219A3.6,3.6,0,0,1,.6,9.75,4.87,4.87,0,0,0,1.8,7.436c0-.666,0-1.342.058-2.009C2.155,2.218,5.327,0,8.461,0h.078c3.134,0,6.306,2.218,6.617,5.427.058.666,0,1.342.049,2.009A4.955,4.955,0,0,0,16.4,9.759a3.506,3.506,0,0,1,.6,1.809v.209a3.566,3.566,0,0,1-.844,2.39A4.505,4.505,0,0,1,13.3,15.538a45.078,45.078,0,0,1-9.615,0A4.554,4.554,0,0,1,.835,14.167,3.6,3.6,0,0,1,0,11.787Z'
        transform='translate(0 0)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M0,0A3.061,3.061,0,0,0,2.037,1.127,3.088,3.088,0,0,0,4.288.5,2.886,2.886,0,0,0,4.812,0'
        transform='translate(6.055 18.852)'
        fill='none'
        stroke={secondaryColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
        opacity={opacity}
      />
    </g>
  )

  switch (set) {
    case 'bold':
      return <Bold />
    case 'bulk':
      return <Bulk />
    case 'broken':
      return <Broken />
    case 'two-tone':
      return <TwoTone />
    default:
      return <Light />
  }
}
Notification.displayName = 'IconlyNotification'
Notification.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(Notification)
