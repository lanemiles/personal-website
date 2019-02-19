import React, { Fragment } from 'react';
import DetailRow from './DetailRow';
import Icon from './Icon';
import Work from '../images/work.png';
import College from '../images/college.png';
import Email from '../images/email.png';
import CV from '../images/cv.png';
import LinkedIn from '../images/in.png';
import Github from '../images/git.png';
import Text from './Text';
import VerticalSpacing from './VerticalSpacing';
import Link from './Link';
import { WithStylesProps, css, withStyles } from '../withStyles';
import Theme from '../theme';

type Props = {};

function DetailsBlock(props: Props & WithStylesProps) {
  return (
    <div {...css(props.styles.detailsBlock)}>
      {/* <VerticalSpacing height={6} /> */}
      <DetailRow icon={ <Icon src={Work} />}><Text>SWE @ Airbnb</Text></DetailRow>
      <DetailRow icon={ <Icon src={College} />}><Text>Pomona College, 2017</Text></DetailRow>
      <DetailRow icon={ <Icon src={Email} />}><Text>lmiles1234@gmail.com</Text></DetailRow>
      <DetailRow icon={ <Icon src={CV} />}><Link href={"/LaneMilesResume.pdf"}>Resume</Link></DetailRow>
      <DetailRow icon={ <Icon src={LinkedIn} />}><Link href={"http://www.linkedin.com/in/lanemiles"}>LinkedIn</Link></DetailRow>
      <DetailRow icon={ <Icon src={Github} />}><Link href={"http://www.github.com/lanemiles"}>Github</Link></DetailRow>
      {/* <VerticalSpacing height={1} /> */}
    </div>
  );
}

export default withStyles((theme: typeof Theme) => ({
  detailsBlock: {
    height: `100%`,
    display: `flex`,
    justifyContent: `center`,
    flexDirection: `column`
  }
}))(DetailsBlock);