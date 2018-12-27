import { AppConfig } from './AppConfig';
import { ConfigUserVO } from './ConfigUserVO';
import { AdminUsers } from './AdminUsers';

export class Config {
    appConfig?: AppConfig;
    configUserVO?: Array<ConfigUserVO>;
    adminUsers?: Array<AdminUsers>;
}
