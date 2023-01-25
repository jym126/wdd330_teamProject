export default class ProductList{
    constructor(category,dataSource,elementList)
    {
        this.category=category;
        this.dataSource=dataSource;
        this.elementList=elementList;

    }
}

const list = new ProductList(category,dataSource,elementList);

