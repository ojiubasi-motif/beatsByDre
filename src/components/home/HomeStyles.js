import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import { Link as LinkScroll } from "react-scroll";
import Fade from 'react-reveal/Fade';
import withReveal from 'react-reveal/withReveal';
import { TransitionGroup } from 'react-transition-group';



// Layout styles
export const Container = css`
    max-width: 968px;
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
`;

export const Grid = css`
    display:grid;
`;

export const CommonSectionstyle = css`
    padding: 4rem 0 2rem;
`;

export const SectionTitleStyle = css`
    font-size:var(--bigger-font-size);
    text-align: center;
    margin-bottom: var(--mb-2-5);
`;

export const SectionTitleGradient = css`
    background: var(--text-gradient);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
`;

// const Reveal = withReveal(styled.div`

// `, <Fade spy appear bottom distance='60px' duration={2500} delay={400}/>);

export const SectionTitle = withReveal(styled.h2`
    ${SectionTitleStyle};
    ${SectionTitleGradient};
`, <Fade  bottom distance='60px' duration={2500} delay={600}/>);

export const Wrapper = styled.div`
    
`;

// export const thie = styled(Reveal)({
//     as:'h1',
// })`, <Fade  />`;

//============== Nav styles ===========================

export const Header = styled.header`
    width: 100%;
    position: fixed;
    top:0;
    left:0;
    z-index: var(--z-fixed);
    background-color:${props => props.scrolled? "var(--body-color)" : 'transparent'};
`;

export const Nav = styled.nav`
    ${Container};
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Navlogo = styled(Link)`
    display:flex;
    width:1.5rem;
 `;
export const Navtoggle = styled.div`
    font-size:1.2rem;
    color: var(--white-color);
    cursor: pointer;
`;

export const Navlist =  styled.ul`
    display:flex;
    flex-direction:column;
    align-items: center;
    row-gap: 1rem;
`;

export const Navclose = styled.div`
    position:absolute;
    font-size:1.5rem;
    top:1rem;
    right:1rem;
    color:var(--white-color);
    cursor: pointer;
`;

export const ScrollLink = styled(LinkScroll)`
    color:var(--white-color);
    font-size:var(--h2-font-size);
    text-transform: uppercase;
    font-weight:var(--font-semi-bold);
    background: var(--text-gradient);
    color:transparent;
    -webkit-background-clip:text;
    background-clip:text;
    cursor: pointer;

    &:hover{
        color:transparent;
        background:var(--white-color);
        -webkit-background-clip:text;
        background-clip:text;
    }

    &.active{
        color:transparent;
        background:var(--white-color);
        -webkit-background-clip:text;
        background-clip:text;
    }
`;


export const Main = styled.main`
   overflow: hidden;
`;

// ======= home styles ============

export const HomeSection = styled.section`
    ${CommonSectionstyle};
`;

export const HomeContainer = styled.div`
    ${Container};
    ${Grid};
`;
export const HomeImgContainer = withReveal(styled.div`
`,<Fade  top distance='60px' duration={2500} delay={900}/>);

export const HomeImg = styled.img`
    width: 250px;
    position:absolute;
    top:-16rem;
    right:1.5rem;
`;

export const HomeData = styled.div`
    padding-top:5rem;
`;

export const HomeHeader = withReveal(styled.div`
   position:relative;
`,<Fade  bottom distance='60px' duration={2500} delay={600}/>);

export const HomeTitle = styled.h1`
    font-size:var(--biggest-font-size);
    background:var(--text-gradient);
    color:transparent;
    -webkit-background-clip: text;
    background-clip: text;
    position: absolute;
    top: -4rem;
    left: 1rem;
    line-height:6rem;
`;

export const HomeSubtitle = styled.h2`
    font-size:var(--big-font-size);
    margin-bottom: var(--mb-2-5);
`;

export const HomeTitleDesc = styled.h3`
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-1);
`;

export const Desc = styled.p`
    margin-bottom:var(--mb-2-5);
    line-height: var(--text-line-height);
`;

export const HomeFooter = withReveal(styled.div`
`,<Fade  bottom distance='60px' duration={2500} delay={700}/>);

export const HomePrice = styled.span`
    font-size: var(--h3-font-size);
    font-weight: var(--font-semi-bold);
    margin-left:var(--mb-0-75);
`;

// button styles
export const Navmenu = styled.div`
    @media screen and (max-width: 768px){
            position:fixed;
            z-index: 999;
            background-color: var(--body-color);
            left:0;
            width:100%;
            padding: 4rem 0 3rem;
            top:${({isOpen})=>(isOpen? '0': '-100%')};
            transition: top 0.5s;
    }
`;


// button styles
const ButtonFlex = css`
    display:inline-flex;
    align-items:center;
    column-gap:.75rem;
`;

export const Button = styled(Link)`
    ${ButtonFlex};
    // display: inline-block;
    background-color: var(--black-color);
    color: var(--white-color);
    padding: 1rem 1.25rem;
    border-radius: .5rem;
    transition: .3s;

    &:hover{
        background-color: var(--black-color-alt);
    }
    .btn__icon{
        font-size:1.2rem;
    }
`;

export const ButtonLabel = styled.span`
    ${ButtonFlex};
    
`;

// sponsor styles
export const SponsorSection = styled.section`
    ${CommonSectionstyle};
`;

export const SponsorContainer = styled(TransitionGroup)`
    ${Container};
    ${Grid};
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    row-gap: 5rem;
    justify-items: center;
    align-items: center;
`;

export const SponsorImg = withReveal(styled.img`
   width:90px;
`,<Fade top distance='60px' duration={2500} delay={500}/>);

// spec styles
export const SpecsSection = styled.section`
    ${CommonSectionstyle};
    ${Grid};
`;

export const SpecsContainer =styled.div`
    ${Container};
    ${Grid};
    position:relative;
`;

export const SpecsContent = styled.div`
    ${Grid};
    row-gap: 1.5rem;
    >*{
        &:first-child,
        &:last-child{
            margin-left: var(--mb-1-5);
        }
    }
`;

export const SpecsData = withReveal(styled.div`
    display: grid;
    row-gap: .25rem;

    .specs__icon{
        font-size:1.2rem;
        color:var(--white-color);
    }
`,<Fade  left  duration={2500} delay={400} interval/>);

export const SpecsTitle = styled.h3`
    font-size:var(--normal-font-size);
    font-weight:var(--font-medium);
`;

export const SpecsSubtitle = styled.span`
    font-size:var(--smaller-font-size);
`;

export const SpecsImgWrapper = withReveal(styled.div`

`, <Fade  right distance='60px' duration={2500} delay={400}/>);

export const SpecsImg = styled.img`
    width:250px;
    position:absolute;
    top:2rem;
    right:-4rem;
`;

// case styles
export const CaseSection = styled.section`
    ${CommonSectionstyle};
    ${Grid};
`;
export const CaseContainer = styled.div`
    ${Container};
    ${Grid};
    position:relative;
    grid-template-columns:repeat(2, 1fr);
`;
export const CaseData = withReveal(styled.div`
    padding:5rem 0 3rem;
`,<Fade  bottom distance='60px' duration={2500} delay={400}/>);

export const CaseImgWrapper = withReveal(styled.div``
,<Fade  top distance='60px' duration={2500} delay={400}/>);

export const CaseImg = styled.img`
    width:250px;
    position: absolute;
    left:-7rem;
`;
export const CaseDesc = styled.p`
    margin-bottom: var(--mb-1-5);
    line-height:var(--text-line-height);
`;

// discount section
export const DiscountSection = styled.section`
    ${CommonSectionstyle};
`;
export const DiscountContainer = styled.div`
    ${Container};
    ${Grid};
    position:relative;
    background-color: var(--container-color);
    padding:2rem 1.5rem;
    border-radius:.75rem;
`;

export const DiscountAnimate = withReveal(styled.div``
,<Fade  left distance='60px' duration={2500} delay={400} interval={100}/>);

export const DiscountTitle = styled.h2`
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-0-75);
`;
export const DiscountDesc = styled.p`
    margin-bottom: var(--mb-1);
`;
export const DiscountImgWrapper = withReveal(styled.div``
,<Fade  right distance='60px' duration={2500} delay={400}/>);

export const DiscountImg = styled.img`
    width:300px;
    position:absolute;
    top:4rem;
    right:-11rem;
`;

// products styles
const TitleAndPriceStyle = css`
    font-size:var(--small-font-size);
`;

export const ProductsSection = styled.section`
    ${CommonSectionstyle};
`;

export const ProductsContainer = styled.div`
    ${Container};
    ${Grid};
    grid-template-columns: repeat(2, 1fr);
    gap:5rem 1.5rem;
    padding-top: 3rem;
`;

export const ProductSectionTitle = withReveal(styled.h2`
    ${SectionTitleStyle};
    ${SectionTitleGradient};
    line-height:4rem;
`,<Fade  bottom distance='60px' duration={2500} delay={600}/>);

export const ProductsTitle = styled.h3`
    ${TitleAndPriceStyle};
`;
export const ProductsCard = withReveal(styled.article`
    position:relative;
    height:132px;
    background-color: var(--container-color);
    padding: .75rem;
    border-radius: .5rem;
    display: grid;
`,<Fade  top distance='60px' duration={2500} delay={400} interval={400}/>);

export const ProductsContent = styled.div`
    align-self:flex-end;
`;

export const ProductsImg = styled.img`
    width:80px;
    position:absolute;
    inset:0;
    margin-left: auto;
    margin-right: auto;
    top:-3rem;
`;

export const ProductsPrice = styled.span`
    ${TitleAndPriceStyle};
    font-weight:var(--font-semi-bold);
`;

export const ProductsBtn = styled(Button)`
    position:absolute;
    right:.5rem;
    bottom:.5rem;
    padding:.5rem;
    border-radius:.35rem;
`;

// footer
export const FooterSection = styled.footer`
    ${CommonSectionstyle};
`;

export const FooterContainer = styled.div`
    ${Container};
    ${Grid};
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    row-gap: 2rem;
`;

export const FooterLogo = withReveal(styled(Link)`
    width:2rem;
`,<Fade  bottom distance='60px' duration={2500} delay={600}/>);

export const FooterForm = styled.form`
    display:flex;
    column-gap:.5rem;
    background-color:var(--container-color);
    padding:.5rem .75rem;
    border-radius: .5rem;
    margin-bottom: var(--mb-2);
`;

export const FooterTitle = styled.h3`
    font-size:var(--h3-font-size);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-1);
`;

export const FooterLinks = styled.ul`
    display:flex;
    flex-direction:column;
    row-gap:.5rem;
`;

export const FooterContent = withReveal(styled.div`
    display:flex;
    flex-direction:column;
    row-gap:.5rem;

    .button__icon{
        font-size:1.2rem;
    }
`,<Fade  bottom distance='60px' duration={2500} delay={600}/>);

export const FooterLink = styled(Link)`
    color:var(--text-color);
    &:hover{
        color:var(--white-color);
    }
`;

export const FooterInput = styled.input`
    background-color:var(--container-color);
    width:90%;
    color:var(--wite-color);

    &::placeholder{
        color:var(--text-color);
        font-size: var(--normal-font-size);
        font-family:var(--body-font);
    }
`;

export const FooterSocial = styled.div`
    display: flex;
    column-gap: 1.25rem;
`;

export const FooterSocialLink = styled(Link)`
    display: inline-flex;
    color: var(--white-color);
    background-color:var(--container-color);
    padding: .5rem;
    border-radius: .25rem;
    font-size: 1rem;

    &:hover{
        background-color:var(--black-color);
    }
    .button__icon{
        font-size:1.2rem
    }
`;

export const FooterCopy = withReveal(styled.p`
    margin-top:5rem;
    text-align: center;
    color: var(--text-color);
`,<Fade  bottom distance='60px' duration={2500} delay={600}/>);

export const FooterCopyLink = styled(Link)`
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
`;




export const Scrollup = styled(Link)`
    position:fixed;
    right:1rem;
    bottom:${props=>props.scrolled? '5rem': '-20%'};
    display:flex;
    background-color:var(--container-color);
    border-radius:.25rem;
    padding:.45rem;
    opacity:9;
    z-index:  var(--z-tooltip);
    transition:.4s;

    .scroll__icon{
        color: var(--text-color);
        font-size: 1.35rem;
    }

    &:hover{
        background-color:var(--black-color);
        opacity:1;
    }
`;