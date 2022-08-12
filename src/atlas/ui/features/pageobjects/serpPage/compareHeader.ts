class CompareHeader {
    private root = 'div[data-testid=lightbox-header]';
    private comparedItemsCount = 'span[data-testid=lightbox-card-count]';
    private vehicleComparizonTitle =    `${this.root} div[class*=MuiBox-root]>h6[class*=subtitle]`;
    private compareButton = `${this.root} button[data-testid=lightbox-compare-button]`;

    private maxItemsToCompare = 4;

    controls = {
        'Lightbox expander element':  $(this.root),
        'Lightbox title': $(this.vehicleComparizonTitle),
        'Compare Vehicles button': $(this.compareButton)
    };

    async waitLoading(){
        await $(this.root).$(this.comparedItemsCount).isDisplayed();
    }

    async open(){
        await $(this.root).click();
    }
    async checkItemsCount(itemsCount: number) {
        await expect($(this.root).$(this.comparedItemsCount)).toContainEqual(`${itemsCount}/${this.maxItemsToCompare})`);
    }

}

export default new CompareHeader();