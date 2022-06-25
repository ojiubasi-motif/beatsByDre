import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Navmenu,
  Button,
  Header,
  Scrollup,
  ScrollLink,
  Nav,
  Navtoggle,
  Navclose,
  Main,
  HomeSection,
  Navlist,
  Navlogo,
  HomeImg,
  HomeImgContainer,
  HomeData,
  HomeHeader,
  HomeTitle,
  HomeSubtitle,
  HomeContainer,
  HomeTitleDesc,
  Desc,
  HomePrice,
  ButtonLabel,
  SponsorSection,
  SponsorImg,
  SpecsContainer,
  SpecsContent,
  SpecsData,
  SpecsTitle,
  SpecsSubtitle,
  SpecsImg,
  SectionTitle,
  SpecsSection,
  SponsorContainer,
  CaseSection,
  CaseImg,
  CaseImgWrapper,
  CaseData,
  CaseDesc,
  CaseContainer,
  DiscountSection,
  DiscountContainer,
  DiscountTitle,
  DiscountDesc,
  DiscountImg,
  ProductsSection,
  ProductSectionTitle,
  ProductsCard,
  ProductsContent,
  ProductsContainer,
  ProductsBtn,
  ProductsImg,
  ProductsPrice,
  ProductsTitle,
  FooterSection,
  FooterContainer,
  FooterContent,
  FooterTitle,
  FooterLinks,
  FooterForm,
  FooterInput,
  FooterSocial,
  FooterCopy,
  FooterLink,
  FooterSocialLink,
  FooterCopyLink,
  FooterLogo,
  HomeFooter,
  SpecsImgWrapper,
  DiscountAnimate,
  DiscountImgWrapper,
} from "./HomeStyles";
import {
  RiArrowUpSLine,
  RiBatteryLine,
  RiBluetoothLine,
  RiCloseLine,
  RiFacebookFill,
  RiFunctionLine,
  RiInformationLine,
  RiInstagramLine,
  RiMicLine,
  RiPlugLine,
  RiSendPlaneLine,
  RiShoppingBagLine,
  RiTwitterLine,
} from "react-icons/ri";
import { animateScroll as ScrollUp } from "react-scroll";
function Home({ isOpen, toggle }) {
  const [isScrolled, setIsScrolled] = useState(false);

  //make changes on style vertical scroll
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Wrapper>
      <Header id="header" scrolled={isScrolled}>
        <Nav>
          <Navlogo to="#" className="link">
            <img src="/headphones/logo.png" alt="logo" />
          </Navlogo>
          <Navmenu isOpen={isOpen}>
            <Navlist>
              <li>
                <ScrollLink
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={300}
                  hashSpy={true}
                  to="home"
                  //   onClick={toggle}
                  className="link"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={50}
                  duration={300}
                  to="specs"
                  //   onClick={toggle}
                  className="link"
                >
                  Specs
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={50}
                  duration={300}
                  to="case"
                  //   onClick={toggle}
                  className="link"
                >
                  Case
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  activeClass="active"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={50}
                  duration={300}
                  to="products"
                  //   onClick={toggle}
                  className="link"
                >
                  Products
                </ScrollLink>
              </li>
            </Navlist>
            <Navclose>
              <RiCloseLine onClick={toggle} />
            </Navclose>
          </Navmenu>

          <Navtoggle>
            <RiFunctionLine onClick={toggle} />
          </Navtoggle>
        </Nav>
      </Header>

      <Main>
        {/* home section */}
        <HomeSection className="home">
          <HomeContainer>
            <HomeImgContainer>
              <HomeImg src="/headphones/home.png" alt="homeImg" />
            </HomeImgContainer>

            <HomeData>
              <HomeHeader>
                <HomeTitle>On ear</HomeTitle>
                <HomeSubtitle>Beats 3</HomeSubtitle>
              </HomeHeader>

              <HomeFooter >
                <HomeTitleDesc>Overview</HomeTitleDesc>
                <Desc>
                  Enjoy award-winning Beats sound with wireless listening
                  freedom and a sleek streamlined design with comfortable padded
                  earphones, delivering first-rate playback
                </Desc>
                <Button to="#" className="link">
                  <ButtonLabel>
                    <RiShoppingBagLine className="btn-icon" /> Add to Bag
                  </ButtonLabel>
                  <HomePrice> $299</HomePrice>
                </Button>
              </HomeFooter>
            </HomeData>
          </HomeContainer>
        </HomeSection>

        {/* sponsor section */}
        <SponsorSection >
          <SponsorContainer exit enter appear >
            <SponsorImg src="/headphones/sponsor1.png" alt="" />
            <SponsorImg src="/headphones/sponsor2.png" alt="" />
            <SponsorImg src="/headphones/sponsor3.png" alt="" />
            <SponsorImg src="/headphones/sponsor4.png" alt="" />
          </SponsorContainer>
        </SponsorSection>

        {/* specs section */}
        <SpecsSection className="specs">
          <SectionTitle>Specs</SectionTitle>
          <SpecsContainer>
            <SpecsContent>
              <SpecsData>
                <RiBluetoothLine className="specs__icon" />
                <SpecsTitle>Connection</SpecsTitle>
                <SpecsSubtitle>Bluetoot v5.2</SpecsSubtitle>
              </SpecsData>
              <SpecsData>
                <RiBatteryLine className="specs__icon" />
                <SpecsTitle>Battery</SpecsTitle>
                <SpecsSubtitle>Duration 40h</SpecsSubtitle>
              </SpecsData>
              <SpecsData>
                <RiPlugLine className="specs__icon" />
                <SpecsTitle>Load</SpecsTitle>
                <SpecsSubtitle>Fast charge 4.2-AAC</SpecsSubtitle>
              </SpecsData>
              <SpecsData>
                <RiMicLine className="specs__icon" />
                <SpecsTitle>Microphone</SpecsTitle>
                <SpecsSubtitle>
                  Supports Apple Siri <br /> and Google{" "}
                </SpecsSubtitle>
              </SpecsData>
            </SpecsContent>
            <SpecsImgWrapper>
              <SpecsImg src="/headphones/specs.png" alt="specs" />
            </SpecsImgWrapper>
          </SpecsContainer>
        </SpecsSection>

        {/* case section */}
        <CaseSection className="case">
          <SectionTitle>Case</SectionTitle>

          <CaseContainer>
            <CaseImgWrapper>
              <CaseImg src="/headphones/case.png" alt="case" />
            </CaseImgWrapper>
            <CaseData>
              <CaseDesc>
                With a comfortable and adaptable case so that you can store it
                whenever you want, and keep your durability forever
              </CaseDesc>
              <Button to="#case" className="link">
                <RiInformationLine className="button__icon" /> More info
              </Button>
            </CaseData>
          </CaseContainer>
        </CaseSection>

        {/* discount section */}
        <DiscountSection>
          <DiscountContainer>
            <DiscountAnimate>
              <DiscountTitle>
                Immerse yourself in <br /> your music
              </DiscountTitle>
              <DiscountDesc>Get it now, up to 50% off.</DiscountDesc>
              <Button to="#discount" className="link">
                <RiShoppingBagLine className="button__icon" /> Shop Now
              </Button>
            </DiscountAnimate>
            <DiscountImgWrapper>
              <DiscountImg src="/headphones/discount.png" alt="discount" />
            </DiscountImgWrapper>
          </DiscountContainer>
        </DiscountSection>

        {/* product section */}
        <ProductsSection className="products">
          <ProductSectionTitle>
            Choose <br /> Your Style
          </ProductSectionTitle>
          <ProductsContainer>
            <ProductsCard>
              <ProductsContent>
                <ProductsImg
                  src="/headphones/product1.png"
                  alt=""

                />
                <ProductsTitle>Black</ProductsTitle>
                <ProductsPrice>$249</ProductsPrice>
                <ProductsBtn
                  to="#product1"
                  className="link"
                >
                  <RiShoppingBagLine className="button__icon" />
                </ProductsBtn>
              </ProductsContent>
            </ProductsCard>

            <ProductsCard>
              <ProductsContent>
                <ProductsImg
                  src="/headphones/product2.png"
                  alt=""

                />
                <ProductsTitle>Red Black</ProductsTitle>
                <ProductsPrice>$249</ProductsPrice>
                <ProductsBtn
                  to="#product1"
                  className="link"
                >
                  <RiShoppingBagLine className="button__icon" />
                </ProductsBtn>
              </ProductsContent>
            </ProductsCard>

            <ProductsCard>
              <ProductsContent>
                <ProductsImg
                  src="/headphones/product3.png"
                  alt=""

                />
                <ProductsTitle>Night Black</ProductsTitle>
                <ProductsPrice>$249</ProductsPrice>
                <ProductsBtn
                  to="#product1"
                  className="link"
                >
                  <RiShoppingBagLine className="button__icon" />
                </ProductsBtn>
              </ProductsContent>
            </ProductsCard>

            <ProductsCard>
              <ProductsContent>
                <ProductsImg
                  src="/headphones/product4.png"
                  alt=""

                />
                <ProductsTitle>Blue</ProductsTitle>
                <ProductsPrice>$249</ProductsPrice>
                <ProductsBtn
                  to="#product1"
                  className="link"
                >
                  <RiShoppingBagLine className="button__icon" />
                </ProductsBtn>
              </ProductsContent>
            </ProductsCard>

            <ProductsCard>
              <ProductsContent>
                <ProductsImg
                  src="/headphones/product5.png"
                  alt=""

                />
                <ProductsTitle>Twilight gray</ProductsTitle>
                <ProductsPrice>$249</ProductsPrice>
                <ProductsBtn
                  to="#product1"
                  className="link"
                >
                  <RiShoppingBagLine className="button__icon" />
                </ProductsBtn>
              </ProductsContent>
            </ProductsCard>
          </ProductsContainer>
        </ProductsSection>
      </Main>

      {/* footer */}
      <FooterSection>
        <FooterContainer className="footer__container container grid">
          <FooterLogo to="#" className="link">
            <img src="/headphones/logo.png" className="" alt="footerLogo" />
          </FooterLogo>
          <FooterContent className="footer__content">
            <FooterTitle className="footer__title">Products</FooterTitle>
            <FooterLinks className="footer_links">
              <li>
                <FooterLink to="#" className="link">
                  Headphones
                </FooterLink>
              </li>
              <li>
                <FooterLink to="#" className="link">
                  Earphones
                </FooterLink>
              </li>
              <li>
                <FooterLink to="#" className="link">
                  Earbuds
                </FooterLink>
              </li>
              <li>
                <FooterLink to="#" className="link">
                  Accessories
                </FooterLink>
              </li>
            </FooterLinks>
          </FooterContent>
          <FooterContent>
            <FooterTitle>Support</FooterTitle>
            <FooterLinks className="footer_links">
              <li>
                <FooterLink to="#" className="link">
                  Product Help
                </FooterLink>
              </li>
              <li>
                <FooterLink to="#" className="link">
                  Register
                </FooterLink>
              </li>
              <li>
                <FooterLink to="#" className="link">
                  Updates
                </FooterLink>
              </li>
              <li>
                <FooterLink to="#" className="link">
                  Provides
                </FooterLink>
              </li>
            </FooterLinks>
          </FooterContent>

          <FooterContent>
            <FooterForm action="" className="footer__form">
              <FooterInput
                type="email"
                placeholder="Email"
                className="footer__input"
              />
              <Button className="link">
                <RiSendPlaneLine className="button__icon" />
                Subscribe
              </Button>
            </FooterForm>
            <FooterSocial >
              <FooterSocialLink
                to={{ pathname: "https://www.facebook.com/" }}
                target="_blank"
                className="link"
              >
                <RiFacebookFill className="button__icon" />
              </FooterSocialLink>
              <FooterSocialLink
                to={{ pathname: "https://www.instagram.com/" }}
                target="_blank"
                className="link"
              >
                <RiInstagramLine className="button__icon" />
              </FooterSocialLink>
              <FooterSocialLink
                to={{ pathname: "https://www.twitter.com/" }}
                target="_blank"
                className="link"
              >
                <RiTwitterLine className="button__icon" />
              </FooterSocialLink>
            </FooterSocial>
          </FooterContent>
        </FooterContainer>

        <FooterCopy>
          <FooterCopyLink
            to={{ pathname: "https://www.youtube.com/" }}
            target="_blank"
            className="link"
          >
            &#169; Motif. All right reserved
          </FooterCopyLink>
        </FooterCopy>
      </FooterSection>

      {/* scroll up */}
      <Scrollup
        to="#"
        scrolled={isScrolled}
        onClick={() => ScrollUp.scrollToTop()}
      >
        <RiArrowUpSLine className="scroll__icon" />
      </Scrollup>
    </Wrapper>
  );
}

export default Home;
