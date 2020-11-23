import * as React from 'react'
import PropTypes from 'prop-types'
import withIcon from '../lib/withIcon'

const TicketStar = ({ color, secondaryColor, strokeWidth, opacity, set }) => {
  const Bold = () => (
    <g transform='translate(2 3)'>
      <path
        d='M15.858,18H4.143A4.128,4.128,0,0,1,0,13.9V11.219a.747.747,0,0,1,.75-.743A1.484,1.484,0,0,0,2.24,9,1.411,1.411,0,0,0,.75,7.612.748.748,0,0,1,0,6.869L0,4.1A4.128,4.128,0,0,1,4.144,0H15.856A4.129,4.129,0,0,1,20,4.1V6.782a.745.745,0,0,1-.75.743,1.475,1.475,0,1,0,0,2.95.747.747,0,0,1,.75.743V13.9A4.128,4.128,0,0,1,15.858,18ZM10,11.27h0l1.455.757a.751.751,0,0,0,.349.088.741.741,0,0,0,.726-.859l-.279-1.608L13.431,8.51a.72.72,0,0,0,.187-.753.729.729,0,0,0-.6-.5l-1.629-.236-.729-1.463a.743.743,0,0,0-1.327,0L8.608,7.025,6.982,7.26a.736.736,0,0,0-.6.5.723.723,0,0,0,.187.753L7.748,9.648,7.47,11.256a.727.727,0,0,0,.3.718.741.741,0,0,0,.777.055L10,11.27Z'
        fill={color}
      />
    </g>
  )
  const Bulk = () => (
    <g transform='translate(2 3)'>
      <path
        d='M19.25,10.476a1.476,1.476,0,1,1,0-2.952.754.754,0,0,0,.53-.217A.741.741,0,0,0,20,6.781V4.1A4.129,4.129,0,0,0,15.856,0H4.144A4.129,4.129,0,0,0,0,4.1V6.868a.741.741,0,0,0,.22.526.754.754,0,0,0,.53.217A1.41,1.41,0,0,1,2.239,9,1.484,1.484,0,0,1,.75,10.476.747.747,0,0,0,0,11.22v2.675A4.129,4.129,0,0,0,4.143,18H15.857A4.129,4.129,0,0,0,20,13.895V11.22a.747.747,0,0,0-.75-.743'
        fill={secondaryColor}
        opacity={opacity}
      />
      <path
        d='M7.086,3.388,5.907,4.536l.279,1.623a.741.741,0,0,1-1.076.779L3.655,6.173,2.2,6.939a.739.739,0,0,1-1.072-.78L1.4,4.536.224,3.388A.739.739,0,0,1,.637,2.126l1.626-.237L2.992.412A.738.738,0,0,1,3.655,0h0a.736.736,0,0,1,.662.413l.729,1.476,1.629.238a.739.739,0,0,1,.409,1.261'
        transform='translate(6.344 5.201)'
        fill={color}
      />
    </g>
  )
  const Light = () => (
    <g transform='translate(2 3)'>
      <path
        d='M15.107,16.667A3.392,3.392,0,0,0,18.5,13.274v-2.7a2.239,2.239,0,1,1,0-4.478l0-2.7A3.392,3.392,0,0,0,15.106,0H3.394A3.393,3.393,0,0,0,0,3.393v2.79A2.163,2.163,0,0,1,2.239,8.335,2.236,2.236,0,0,1,0,10.574v2.7a3.392,3.392,0,0,0,3.392,3.393Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.205,5.179l1.74.915a.223.223,0,0,0,.323-.234L4.935,3.921,6.344,2.55a.222.222,0,0,0-.123-.379L4.275,1.888,3.4.124a.222.222,0,0,0-.4,0L2.135,1.888.19,2.171a.222.222,0,0,0-.123.379L1.475,3.921,1.142,5.86a.223.223,0,0,0,.323.234l1.74-.915Z'
        transform='translate(6.794 5.676)'
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
    <g transform='translate(2 3)'>
      <path
        d='M10.4,18a.743.743,0,1,1,0-1.486h5.463A2.634,2.634,0,0,0,18.5,13.9V11.868a2.956,2.956,0,0,1,0-5.735l0-2.029a2.634,2.634,0,0,0-2.642-2.619H4.144A2.634,2.634,0,0,0,1.5,4.1V6.213A2.863,2.863,0,0,1,3.739,9,2.969,2.969,0,0,1,1.5,11.868V13.9a2.634,2.634,0,0,0,2.642,2.619h1.79a.743.743,0,1,1,0,1.486H4.143A4.128,4.128,0,0,1,0,13.9V11.219a.747.747,0,0,1,.75-.743A1.484,1.484,0,0,0,2.239,9,1.409,1.409,0,0,0,.75,7.612a.749.749,0,0,1-.53-.219A.741.741,0,0,1,0,6.869L0,4.1A4.128,4.128,0,0,1,4.144,0H15.856A4.129,4.129,0,0,1,20,4.1V6.782a.744.744,0,0,1-.22.526.752.752,0,0,1-.53.218,1.475,1.475,0,1,0,0,2.95.747.747,0,0,1,.75.743V13.9A4.128,4.128,0,0,1,15.858,18ZM7.571,12.808a1.007,1.007,0,0,1-.385-.977l.276-1.653L6.294,9.005a1.013,1.013,0,0,1-.246-1.023A.97.97,0,0,1,6.832,7.3l1.612-.242.723-1.506a.958.958,0,0,1,1.738,0L11.691,7.1a.775.775,0,0,1-.312,1.031.716.716,0,0,1-.563.053.743.743,0,0,1-.436-.373l-.331-.649L9.6,8.1a.74.74,0,0,1-.558.418l-.968.145.7.706a.775.775,0,0,1,.213.675l-.166.994.868-.469a.719.719,0,0,1,.689,0l.868.469-.165-.994a.777.777,0,0,1,.212-.676l1.446-1.452a.689.689,0,0,1,.524-.216.727.727,0,0,1,.525.23.776.776,0,0,1-.014,1.078l-1.167,1.173.276,1.653a1,1,0,0,1-.386.977.945.945,0,0,1-1.022.075L10.034,12.1l-1.443.779A.928.928,0,0,1,8.14,13,.946.946,0,0,1,7.571,12.808Z'
        fill={color}
      />
    </g>
  )

  const TwoTone = () => (
    <g transform='translate(2 3)'>
      <path
        d='M15.107,16.667A3.392,3.392,0,0,0,18.5,13.274v-2.7a2.239,2.239,0,1,1,0-4.478l0-2.7A3.392,3.392,0,0,0,15.106,0H3.394A3.393,3.393,0,0,0,0,3.393v2.79A2.163,2.163,0,0,1,2.239,8.335,2.236,2.236,0,0,1,0,10.574v2.7a3.392,3.392,0,0,0,3.392,3.393Z'
        transform='translate(0.75 0.75)'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit='10'
        strokeWidth={strokeWidth}
      />
      <path
        d='M3.205,5.179l1.74.915a.223.223,0,0,0,.323-.234L4.935,3.921,6.344,2.55a.222.222,0,0,0-.123-.379L4.275,1.888,3.4.124a.222.222,0,0,0-.4,0L2.135,1.888.19,2.171a.222.222,0,0,0-.123.379L1.475,3.921,1.142,5.86a.223.223,0,0,0,.323.234l1.74-.915Z'
        transform='translate(6.794 5.676)'
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
TicketStar.displayName = 'IconlyTicketStar'
TicketStar.propTypes = {
  opacity: PropTypes.string,
  color: PropTypes.string,
  secondaryColor: PropTypes.string,
  set: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default withIcon(TicketStar)
