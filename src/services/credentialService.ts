import { db } from '../database/models';
import Credential from '../database/models/credential';

class CredentialService {
    private static instance: CredentialService;

    static getInstance() {
        if (!CredentialService.instance) {
            CredentialService.instance = new CredentialService();
        }

        return CredentialService.instance;
    }

    findAll = async () => {
        const credentials: Credential[] = await Credential.findAll();
        return credentials;
    };

    findById = async (id: string) => {
        const existingCredential: Credential | null = await Credential.findByPk(
            id
        );
        return existingCredential;
    };

    findByClientId = async (clientId: string) => {
        const existingCredential: Credential | null = await Credential.findOne({
            where: { ClientID: clientId },
        });

        return existingCredential;
    };

    save = async (object: any) => {
        try {
            if (!object && Object.keys(object).length == 0) {
                throw new Error('Object must contain at least one property');
            }

            const credential = await Credential.create({ ...object });
            return credential;
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

        let existingCredential = await this.findById(id);
        if (!existingCredential) {
            throw new Error('credential_not_found');
        }

        try {
            await Credential.update(
                { ...object },
                {
                    where: { ProdID: id },
                }
            );

            existingCredential = await this.findById(id);
            return existingCredential;
        } catch (err) {
            throw err;
        }
    };

    deleteByPrimaryKey = async (id: string) => {
        let existingCredential = await this.findById(id);
        if (!existingCredential) {
            throw new Error('credential_not_found');
        }

        try {
            await existingCredential.destroy();
        } catch (err) {
            throw err;
        }
    };
}

export default CredentialService;
