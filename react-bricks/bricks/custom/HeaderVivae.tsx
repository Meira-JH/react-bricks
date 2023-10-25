import { useEffect, useRef, useState } from 'react'
import {
  Image,
  Link,
  Repeater,
  types,
  useAdminContext,
  useReactBricksContext,
} from 'react-bricks/frontend'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  LayoutProps,
  backgroundColorsEditProps,
  borderBottomEditProp,
  sectionDefaults,
} from '../react-bricks-ui/LayoutSideProps'
import blockNames from '../react-bricks-ui/blockNames'
import { bgColors, buttonColors } from '../react-bricks-ui/colors'
import { MenuItems } from '../react-bricks-ui/layout/HeaderMenuItem'
import useOnClickOutside from '../react-bricks-ui/layout/useClickOutside'
import { ButtonProps } from '../react-bricks-ui/shared/bricks/Button'
import Section from '../react-bricks-ui/shared/components/Section'

interface HeaderProps extends LayoutProps {
  menuItems: MenuItems[]
  logo: types.IImageSource
  buttons: ButtonProps[]
}

const HeaderVivae: types.Brick<HeaderProps> = ({
  backgroundColor,
  borderBottom,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDarkColorMode, toggleColorMode } = useReactBricksContext()
  const [mounted, setMounted] = useState(false)
  const { isAdmin } = useAdminContext()

  // - in Admin get the current theme from `isDarkColorMode`
  // - in the frontend page get the current theme from localStorage

  const currentTheme = isAdmin
    ? isDarkColorMode
      ? 'dark'
      : 'light'
    : typeof window === 'undefined'
    ? ''
    : localStorage.getItem('color-mode')

  useEffect(() => {
    setMounted(true)
  }, [])

  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => setMobileMenuOpen(false))

  return (
    <Section
      backgroundColor={backgroundColor}
      borderBottom={borderBottom ? 'full' : 'none'}
    >
      <nav className="py-5 px-5 sm:mx-[5.55555%] xl:mx-[11%] flex justify-start items-center">
        <Link
          href="/"
          aria-label="home"
          className="inline-flex py-1 px-2 mr-6  border-solid"
        >
          <Image
            propName="logo"
            alt="Logo"
            maxWidth={300}
            imageClassName="block w-32 h-16 object-contain "
          />
        </Link>
        <div className="hidden lg:flex justify-center items-center space-x-6 w-full">
          <Repeater
            propName="menuItems"
            itemProps={{ mobileRef: ref, setMobileMenuOpen }}
          />
        </div>

        {/* DARK MODE BUTTON DESKTOP */}
        {mounted && (
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 mr-4 ml-auto lg:ml-8 text-gray-400 dark:text-gray-200"
            onClick={toggleColorMode}
          >
            {currentTheme === 'light' ? (
              <BsMoonFill size="1em" />
            ) : (
              <BsSunFill size="1em" />
            )}
          </button>
        )}

        <div
          ref={ref}
          className="relative lg:hidden flex items-center h-full sm:gap-x-4"
        >
          <button
            className="group p-1 w-7 h-7 flex justify-center items-center rounded-[5px] bg-gray-200 dark:bg-transparent hover:bg-sky-500/20 dark:hover:bg-sky-500/40 hover:text-sky-600 dark:hover:text-sky-500 focus:bg-sky-500/20 dark:focus:bg-sky-500/40 focus:text-sky-600 dark:focus:text-sky-500"
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? (
              <FiX className="text-gray-600 dark:text-white" size={18} />
            ) : (
              <FiMenu className="text-gray-600 dark:text-white" size={20} />
            )}
          </button>
          {mobileMenuOpen && (
            <div className="absolute top-8 right-0 w-64 bg-white p-5 border rounded-lg shadow-lg z-10">
              <Repeater
                propName="menuItems"
                itemProps={{
                  mobileRef: ref,
                  setMobileMenuOpen,
                }}
              />
            </div>
          )}
        </div>
      </nav>
    </Section>
  )
}

HeaderVivae.schema = {
  name: 'HeaderVivae',
  label: 'HeaderVivae',
  category: 'layout',
  tags: ['header', 'menu'],
  previewImageUrl: `/bricks-preview-images/${blockNames.Header}.png`,
  repeaterItems: [
    {
      name: 'menuItems',
      itemType: blockNames.HeaderMenuItem,
      itemLabel: 'Item',
      min: 0,
      max: 6,
    },
    {
      name: 'buttons',
      itemType: blockNames.Button,
      itemLabel: 'Button',
      min: 0,
      max: 2,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [backgroundColorsEditProps, borderBottomEditProp],
    },
  ],
  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    borderBottom: 'none',
    menuItems: [
      {
        linkPath: '#sessão1',
        linkText: 'Sessão 1',
      },
      {
        linkPath: '#sessão2',
        linkText: 'Sessão 2',
      },
      {
        linkPath: '#sessão3',
        linkText: 'Sessão 3',
      },
      {
        linkPath: '#sessão4',
        linkText: 'Sessão 4',
      },
    ],
    logo: {
      src: '/bricks-preview-images/vivae-logo-default.png',
      placeholderSrc: '/bricks-preview-images/vivae-logo-default.png',
      srcSet: '',
      width: 550,
      height: 300,
      alt: 'Logo Vivae',
      seoName: 'logo-vivae',
    },
  }),
  stories: [
    {
      id: 'header-dark',
      name: 'Header dark',
      previewImageUrl: `/bricks-preview-images/header-dark.png`,
      showAsBrick: true,
      props: {
        ...sectionDefaults,
        borderBottom: 'none',
        backgroundColor: bgColors.DARK_GRAY.value,
        menuItems: [
          {
            linkPath: '/',
            linkText: 'Home',
          },
          {
            linkPath: '/about-us',
            linkText: 'About us',
          },
        ],
        logo: {
          src: 'https://images.reactbricks.com/original/881feb54-54af-46d5-8825-31e22ccbac25.webp',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/881feb54-54af-46d5-8825-31e22ccbac25.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-600.webp 600w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-450.webp 450w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-300.webp 300w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-150.webp 150w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-75.webp 75w',
          width: 5314,
          height: 1181,
          alt: 'React Bricks',
          seoName: 'react-bricks',
          fallbackSrc:
            'https://images.reactbricks.com/original/881feb54-54af-46d5-8825-31e22ccbac25.png',
          fallbackSrcSet:
            'https://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-600.png 600w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-450.png 450w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-300.png 300w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-150.png 150w,\nhttps://images.reactbricks.com/src_set/881feb54-54af-46d5-8825-31e22ccbac25-75.png 75w',
          fallbackType: 'image/png',
        },
        buttons: [
          {
            type: 'link',
            text: 'Edit content',
            href: '/admin',
            isTargetBlank: true,
            buttonType: 'submit',
            buttonColor: buttonColors.SKY.value,
            variant: 'outline',
            padding: 'small',
            simpleAnchorLink: true,
          },
        ],
      },
    },
  ],
}

export default HeaderVivae
