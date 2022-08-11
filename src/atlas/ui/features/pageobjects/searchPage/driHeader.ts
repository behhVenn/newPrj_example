class DRIHeder {
    // TODO: redesign to business action instead of controls direct actions
    public get controls(){
        return {
            'Search button':  $('#global-header-desktop-search-icon')
        };
    }
}

export default new DRIHeder();