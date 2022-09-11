import styled, {keyframes} from "styled-components";
import { darken } from 'polished';

const INITIAL_TOP = -550;
const TOP_STEP = 10;
const WAVE_DELAY = 0.125;
const SWELL_DELAY = 1.25;

    const wave = keyframes`
      0% {
        margin-left: 0;
      }
      100% {
        margin-left: -1600px;
      }
    `;

const swell = keyframes`
        0%, 100% {
          transform: translate3d(0,-25px,0);
        }
        50% {
          transform: translate3d(0,5px,0);
        }
    `;

const AnimatedWave = styled.div`
  position: absolute;
  width: 6400px;
  height: 350px;
   background: url("data:image/svg+xml,%3Csvg width='1600' height='324' viewBox='0 0 1600 324' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1600 198.001C1289 198.001 1190.1 -0.408459 789 0.000631746C389 0.000631746 289 198.001 0 198.001V324.001H1600C1600 324.001 1600 245.455 1600 198.001ZM1600 324.001C1600 304.643 1600 284.453 1600 268.001C1454.47 268.001 1355.38 224.554 1250.04 178.364C1130.27 125.846 1002.41 69.783 789 70.0006C572.784 70.0006 444.223 127.853 326.086 181.015C225.669 226.202 132.784 268.001 0 268.001V324.001H1600Z' fill='${props => darken(0.3 * ((props.numWaves - props.index) / props.numWaves), "#B49164").replace("#", "%23")}'/%3E%3C/svg%3E%0A") repeat-x;
  top: ${props => props.top}px;
  opacity: ${props => props.index / (props.numWaves - 1)};
  animation: ${wave} 20s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -${props => props.index * WAVE_DELAY}s infinite, ${swell} -${props => props.index * SWELL_DELAY }s 15s ease infinite;
`;

const Wave = ({ index, numWaves }) => {

    const top = INITIAL_TOP + (TOP_STEP * index);

    return (
        <AnimatedWave index={index} top={top} numWaves={numWaves} />
    )
}

export default Wave;
