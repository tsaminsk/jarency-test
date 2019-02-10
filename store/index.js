import data from 'assets/data/data.js'

export const state = () => (data);

export const getters = {
    setMenu: state => state.menu,

    setSideBarNav: state => state.sideBarNav,

    setSidebarSelectList: state => state.sideBarList,

    setUserParams: state => state.userParams,

    setCartTypes: state => state.cartTypes,

    setFooterInfo: state => state.footerInfo
}
