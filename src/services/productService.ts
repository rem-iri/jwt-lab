import { db } from '../database/models';
import Product from '../database/models/product';

class ProductService {
    private static instance: ProductService;

    static getInstance() {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }

        return ProductService.instance;
    }

    findAll = async () => {
        const products: Product[] = await Product.findAll();
        return products;
    };

    findById = async (id: string) => {
        const existingProduct: Product | null = await Product.findByPk(id);
        return existingProduct;
    };

    save = async (object: any) => {
        try {
            if (!object && Object.keys(object).length == 0) {
                throw new Error('Object must contain at least one property');
            }

            const product = await Product.create({ ...object });
            return product;
        } catch (err) {
            throw err;
        }
    };

    update = async (id: string, object: any) => {
        if (!object && Object.keys(object).length == 0) {
            throw new Error(
                'Object to be updated must contain at least one property.'
            );
        }

        let existingProduct = await this.findById(id);
        if (!existingProduct) {
            throw new Error('product_not_found');
        }

        try {
            await Product.update(
                { ...object },
                {
                    where: { ProdID: id },
                }
            );

            existingProduct = await this.findById(id);
            return existingProduct;
        } catch (err) {
            throw err;
        }
    };

    deleteByPrimaryKey = async (id: string) => {
        let existingProduct = await this.findById(id);
        if (!existingProduct) {
            throw new Error('product_not_found');
        }

        try {
            await existingProduct.destroy();
        } catch (err) {
            throw err;
        }
    };
}

export default ProductService;
