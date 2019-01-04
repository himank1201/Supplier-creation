import { AddressVO } from './AddressVO';
import { CountyTaxJrVO } from './CountyTaxJrVO';
import { UserVO } from './UserVO';

export class SupplierVO {
    supplierNumber?: string;
    sapSupplierNumber?: string;
    supplierMode?: string;
    supplierName?: string;
    supplierName2?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    fax?: string;
    stAddress?: string;
    stAddress1?: string;
    city?: string;
    county?: string;
    state?: string;
    zipCode?: string;
    taxJrCode?: string;
    taxId?: string;
    taxIdType?: string;
    acceptedPayTerms?: boolean;
    alterPayTerms?: string;
    organisationType?: string;
    paymentMethod?: string;
    accountNo?: string;
    routingNo?: string;
    bankName?: string;
    validation?: string;
    accountType?: string;
    purchaseOrg?: string;
    contract?: string;
    minorityStatus?: string;
    withHoldCode?: string;
    estCostCenterAmount?: string;
    supCreateReason?: string;
    initiator?: string;
    initUserId?: string;
    initEmailId?: string;
    manager?: string;
    managerEmail?: string;
    managerId?: string;
    paymentTerms?: string;
    reconAccount?: string;
    requestStatus?: string;
    requestStatusId?: string;
    currentView?: string;
    viewOwner?: string;
    logInfo?: string;
    message?: string;
    userAction?: string;
    userComments?: string;
    searchSuppliers?: Array<string>;
    addresses?: Array<AddressVO>;
    counties?: Array<CountyTaxJrVO>;
    antiBribOptions?: Array<string>;
    userVo?: UserVO;
    searchMessage?: string;
    storeSupplier?: boolean;
}