import {createGlobalStyle} from 'styled-components';
import * as ElementStyles from './components/home/HomeStyles';

export const Global = createGlobalStyle`
    
    :root{
        // font-family: 'Poppins', sans-serif;
        --header-height: 3rem;

        //========== Colors ==========
        --hue-color: 206;
        --black-color: hsl(var(--hue-color), 4%, 4%);
        --black-color-alt: hsl(var(--hue-color), 4%, 8%);
        --title-color: hsl(var(--hue-color), 4%, 95%);
        --text-color: hsl(var(--hue-color), 4%, 75%);
        --text-color-light: hsl(var(--hue-color), 4%, 65%);
        --white-color: #FFF;
        --body-color: hsl(var(--hue-color), 4%, 6%);
        --container-color: hsl(var(--hue-color), 4%, 10%);
        --text-gradient: linear-gradient(hsl(var(--hue-color), 4%, 24%), hsl(var(--hue-color), 4%, 8%));
        --scroll-thumb-color: hsl(var(--hue-color), 4%, 16%);
        --scroll-thumb-color-alt: hsl(var(--hue-color), 4%, 20%);
      
        //========== Font and typography ==========
        --body-font: 'Poppins', sans-serif;
        --biggest-font-size: 5rem;
        --bigger-font-size: 3.5rem;
        --big-font-size: 2.5rem;
        --h2-font-size: 1.25rem;
        --h3-font-size: 1.125rem;
        --normal-font-size: .938rem;
        --small-font-size: .813rem;
        --smaller-font-size: .75rem;
        --text-line-height: 2rem;
      
        //========== Font weight ==========
        --font-medium: 500;
        --font-semi-bold: 600;
      
        //========== Margines Bottom ==========
        --mb-0-5: .5rem;
        --mb-0-75: .75rem;
        --mb-1: 1rem;
        --mb-1-5: 1.5rem;
        --mb-2: 2rem;
        --mb-2-5: 2.5rem;
      
        //========== z index ==========
        --z-tooltip: 10;
        --z-fixed: 100;
      }
      
      //=============== RESPONSIVE TYPOGRAPHY ===============
      @media screen and (min-width: 968px) {
        :root {
          --biggest-font-size: 7.5rem;
          --bigger-font-size: 4.5rem;
          --big-font-size: 4rem;
          --h2-font-size: 1.5rem;
          --h3-font-size: 1.25rem;
          --normal-font-size: 1rem;
          --small-font-size: .875rem;
          --smaller-font-size: .813rem;
        }
      }
      
      //=============== BASE ===============
      *{
          box-sizing: border-box;
          padding: 0;
          margin: 0;
      }

      html{
          scroll-behavior:smooth;
      }

      body{
          margin: var(--header-height) 0 0 0;
          font-family: var(--body-font);
          font-size: var(--normal-font-size);
          background-color: var(--body-color);
          color: var(--text-color);
      }
      
      h1, h2, h3{
          color:var(--title-color);
      }

      ul{
          list-style: none;
      }

      .link{
          text-decoration: none;
      }

      button, input{
          border:none;
          outline:none;
      }

      button{
        cursor: pointer;
      }

      img{
         max-width: 100%;
         height:auto;
      }
      
      //=============== SCROLL BAR ===============
      ::-webkit-scrollbar{
          width:.60rem;
          border-radius:.5rem;
      }

      ::-webkit-scrollbar-thumb{
          background-color: var(--scroll-thumb-color);
          border-radius: .5rem;
      }
      ::-webkit-scrollbar-thumb:hover{
        background-color: var(--scroll-thumb-color-alt);
    }
      
      //=============== MEDIA QUERIES ===============
      // For small devices 
      @media screen and (max-width: 340px){
          ${ElementStyles.Container}{
              margin-left:var(--mb-1);
              margin-right:var(--mb-1);
          }
          ${ElementStyles.SectionTitle}{
              font-size:var(--big-font-size);
          }
          ${ElementStyles.HomeImg}{
              width: 200px;
              top: -13rem;
          }
          ${ElementStyles.HomeTitle}{
              top: -4rem;
              font-size: var(--bigger-font-size);
          }
          ${ElementStyles.HomeData}{
              padding-top: 1rem;
          }
          ${ElementStyles.Desc}{
              font-size: var(--small-font-size);
          }
          ${ElementStyles.SpecsImg}{
              width: 200px;
          }
          ${ElementStyles.CaseContainer}{
              grid-template-columns: .6fr 1fr;
          }

          ${ElementStyles.CaseImg}{
              width:220px;
              top: -2rem;
              left:-9rem;
          }
          ${ElementStyles.CaseData}{
              padding: 0;
          }
          ${ElementStyles.ProductsContainer}{
                grid-template-columns: 142px;
                justify-content: center;
          }
      }
      
      // For medium devices 
      @media screen and (min-width: 576px){
          ${ElementStyles.HomeContainer}{
              grid-template-columns: .8fr 1fr;
          }
          ${ElementStyles.HomeData}{
              padding-top:2rem;
          }
          ${ElementStyles.HomeImg}{
              top:-7rem;
              left: 0;
          }
          ${ElementStyles.SpecsImg}{
              position: initial;
          }
          ${ElementStyles.SpecsContainer}{
              grid-template-columns: repeat(2, 1fr);
              justify-items: center;
              align-items: center;
          }
          ${ElementStyles.CaseImg}{
              position:initial;

          }
          ${ElementStyles.CaseData}{
              padding:0;
          }
          ${ElementStyles.CaseContainer}{
              grid-template-columns:max-content 250px;
              justify-content: center;
              align-items: center;
              column-gap: 2rem;
          }
          ${ElementStyles.DiscountImg}{
              position:initial;
          }
          ${ElementStyles.DiscountContainer}{
              grid-template-columns: repeat(2, 1fr);
              justify-items: center;
              align-items:center;
          }
          ${ElementStyles.ProductsContainer}{
              grid-template-columns: repeat(3, 142px);
              justify-content: center;
          }
      }

      @media screen and (min-width:767px){ 
          body{
              margin:0;
          }
          ${ElementStyles.CommonSectionstyle}{
              padding: 6rem 0 2rem;
          }
          ${ElementStyles.Nav}{
              height: calc(var(--header-height) + 1.5rem);
          }
          ${ElementStyles.Navlogo}{
              width: 2rem;
          }
          ${ElementStyles.Navlist}{
              flex-direction:row;
              column-gap: 3.5rem;
          }
          ${ElementStyles.ScrollLink}{
              font-size: var(--normal-font-size);
              text-transform: initial;

          }
          ${ElementStyles.Navtoggle},${ElementStyles.Navclose}{
              display: none;
          }
          ${ElementStyles.HomeContainer}{
              position: relative;
              grid-template-columns: repeat(2, 1fr);
          }
          ${ElementStyles.HomeImg}{
              top: -9rem;
              left: 4rem;
          }
          ${ElementStyles.HomeData}{
              padding-top:8rem;
          }
          ${ElementStyles.SpecsImg}{
              width:300px;
          }
          ${ElementStyles.CaseContainer}{
            column-gap:5rem;   
         }
         ${ElementStyles.CaseImg}{
            width:300px;   
         }
         ${ElementStyles.CaseDesc}{
            margin-bottom: var(--mb-2);   
         }
         ${ElementStyles.DiscountContainer}{
            grid-template-columns: 250px max-content;
            justify-content:center;
            column-gap: 5rem;
            padding: 3rem 0;
         }
         ${ElementStyles.DiscountTitle}{
            font-size: var(--h2-font-size);
            margin-bottom: var(--mb-1); 
         }
         ${ElementStyles.DiscountDesc}{
               margin-bottom: var(--mb-2);
         }
         ${ElementStyles.ProductsContainer}{
            grid-template-columns: repeat(3, 162px);
            gap:6rem 3rem;
            padding-top: 5rem;
         }
         ${ElementStyles.ProductsCard}{
            height:152px;
            padding: .85rem;
         }
         ${ElementStyles.ProductsImg}{
            width:95px;   
         }
         ${ElementStyles.FooterContainer}{
            grid-template-columns: .4fr .7fr .7fr 1fr;   
         }

      }
      
      // For large devices 
      @media screen and (min-width: 1024px){
          body{
            display:flex;
            justify-content:center;
          }
          
          ${ElementStyles.Header}{
            left:auto;   
         }
        ${ElementStyles.Container}{
            margin-left: auto;
            margin-right: auto;   
         }
         ${ElementStyles.HomeImg}{
            width:300px;
            top:-15rem;   
         }
         ${ElementStyles.HomeTitle}{
            top: -5rem;
            left: 3.5rem;   
         }
         ${ElementStyles.Desc}{
            padding-right: 5rem;   
         }
         ${ElementStyles.SponsorImg}{
            width:100px;   
         }
         ${ElementStyles.DiscountImg}{
            width:350px;   
         }
         ${ElementStyles.FooterContainer}{
            padding-top: 3rem;   
         }
         ${ElementStyles.FooterCopy}{
            top: 9rem;   
         }

      }
    }
`;