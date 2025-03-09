import themeSwitcher from "./theme.js"
import loadingAnimation from "./loader.js"
import btnHamburger from "./primary-navigation/hamburger-button.js"
import primaryNavLinks from "./primary-navigation/primary-nav-links.js"

export default function components() {
  themeSwitcher()
  loadingAnimation()
  btnHamburger()
  primaryNavLinks()
}
