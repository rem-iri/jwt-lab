import { db } from '../database/models';
import QueryHandling from '../database/models/queryHandling';

class QueryHandlingService {
    private static instance: QueryHandlingService;

    static getInstance() {
        if (!QueryHandlingService.instance) {
            QueryHandlingService.instance = new QueryHandlingService();
        }

        return QueryHandlingService.instance;
    }

    findAll = async () => {
        const queryHandlings: QueryHandling[] = await QueryHandling.findAll();
        return queryHandlings;
    };

    findById = async (id: string) => {
        const existingQueryHandling: QueryHandling | null =
            await QueryHandling.findByPk(id);
        return existingQueryHandling;
    };

    save = async (object: any) => {
        try {
            if (!object && Object.keys(object).length == 0) {
                throw new Error('Object must contain at least one property');
            }

            console.log('TO SAVE', object);
            const queryHandling = await QueryHandling.create({ ...object });
            console.log('AFTER', queryHandling);
            return queryHandling;
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

        let existingQueryHandling = await this.findById(id);
        if (!existingQueryHandling) {
            throw new Error('queryHandling_not_found');
        }

        try {
            await QueryHandling.update(
                { ...object },
                {
                    where: { QID: id },
                }
            );

            existingQueryHandling = await this.findById(id);
            return existingQueryHandling;
        } catch (err) {
            throw err;
        }
    };

    deleteByPrimaryKey = async (id: string) => {
        let existingQueryHandling = await this.findById(id);
        if (!existingQueryHandling) {
            throw new Error('queryHandling_not_found');
        }

        try {
            await existingQueryHandling.destroy();
        } catch (err) {
            throw err;
        }
    };
}

export default QueryHandlingService;
