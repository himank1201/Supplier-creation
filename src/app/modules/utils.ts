export default class Utils {


    static getStateDropDownValues() {
        const stateDropDownValues = [
            { label: 'State *', value: '0' },
            { label: 'Alabama', value: 'AL'}, { label: 'Alaska', value: 'AK'}, { label: 'Arizona', value: 'AZ'},
            { label: 'Arkansas', value: 'AR'}, { label: 'California', value: 'CA'}, { label: 'Colorado', value: 'CO'},
            { label: 'Connecticut', value: 'CT'}, { label: 'Delaware', value: 'DE'}, { label: 'Florida', value: 'FL'},
            { label: 'Georgia', value: 'GA'}, { label: 'Hawaii', value: 'HI'}, { label: 'Idaho', value: 'ID'},
            { label: 'Illinois', value: 'IL'}, { label: 'Indiana', value: 'IN'}, { label: 'Iowa', value: 'IA'},
            { label: 'Kansas', value: 'KS'}, { label: 'Kentucky', value: 'KY'}, { label: 'Louisiana', value: 'LA'},
            { label: 'Maine', value: 'ME'}, { label: 'Maryland', value: 'MD'}, { label: 'Massachusetts', value: 'MA'},
            { label: 'Michigan', value: 'MI'}, { label: 'Minnesota', value: 'MN'}, { label: 'Mississippi', value: 'MS'},
            { label: 'Missouri', value: 'MO'}, { label: 'Montana', value: 'MT'}, { label: 'Nebraska', value: 'NE'},
            { label: 'Nevada', value: 'NV'}, { label: 'New Hampshire', value: 'NH'}, { label: 'New Jersey', value: 'NJ'},
            { label: 'New Mexico', value: 'NM'}, { label: 'New York', value: 'NY'}, { label: 'North Carolina', value: 'NC'},
            { label: 'North Dakota', value: 'ND'}, { label: 'Ohio', value: 'OH'}, { label: 'Oklahoma', value: 'OK'},
            { label: 'Oregon', value: 'OR'}, { label: 'Pennsylvania', value: 'PA'}, { label: 'Rhode Island', value: 'RI'},
            { label: 'South Carolina', value: 'SC'}, { label: 'South Dakota', value: 'SD'}, { label: 'Tennessee', value: 'TN'},
            { label: 'Texas', value: 'TX'}, { label: 'Utah', value: 'UT'}, { label: 'Vermont', value: 'VT'},
            { label: 'Virginia', value: 'VA'}, { label: 'Washington', value: 'WA'}, { label: 'Washington, D.C', value: 'DC'},
            { label: 'West Virginia', value: 'WV'}, { label: 'Wisconsin', value: 'WI'}, { label: 'Wyoming', value: 'WY'},
            { label: 'Virgin Islands', value: 'VI'}, { label: 'Guam', value: 'GU'}, { label: 'Northern Mariana Isl', value: 'MP'},
            { label: 'Puerto Rico', value: 'PR'} ];

        return stateDropDownValues;
    }

    static getOrgTypes() {
        const orgTypes = [
            { label: 'Oraganization Type *', value: '0' }, { label: 'Individual', value: '01-Individual' },
            { label: 'Corporation', value: '02-Corporation' }, { label: 'Partnership and LLC', value: '03-Partnership and LLC' },
            { label: 'Fiduciary', value: '04-Fiduciary' }, { label: 'Nominee', value: '05-Nominee' },
            { label: 'Government or int.organization', value: '06-Government or int.organization' },
            { label: 'Tax exempt organization', value: '07-Tax exempt organization' },
            { label: 'Private foundation', value: '08-Private foundation' },
            { label: 'Artist or athlete', value: '09-Artist or athlete' }, { label: 'Law Firm', value: '10-Law Firm' },
            { label: 'Other', value: '19-Other' }, { label: 'Type of recipient unknown', value: '20-Type of recipient unknown' }];

        return orgTypes;
    }

    static getPaymentTypes() {
        const payTypes = [
            { label: 'Payment Method *', value: '0' },
            { label: 'Vendor EFT Outbound', value: 'V- Vendor EFT Outbound' },
            { label: 'Check', value: 'C- Check' }
        ];

        return payTypes;
    }

    static getActTypes() {
        const actTypes = [
            { label: 'Account Type *', value: 'None' },
            { label: 'Checking Account', value: '01-Checking Account' },
            { label: 'Savings Account', value: '02-Savings Account' }
        ];

        return actTypes;
    }

    static getPurchasingOrganisation() {
        const purOrgs = [
            { label: 'Purchasing Organization *', value: '0' },
            { label: 'MBUSA', value: 'US01-MBUSA' },
            { label: 'DAIH', value: '1330-DAIH' }
        ];

        return purOrgs;
    }

    static getMinorityTypes() {
        const minorityTypes = [
            { label: 'Minority Status *', value: '0' }, { label: 'None', value: 'None' },
            { label: 'Minority Business Enterprise', value: 'MBE' }, { label: 'Women Based Enterprise', value: 'WBE' },
            { label: 'Second Tier Minority Bus Ent.', value: '2MB' }, { label: 'Second Tier Women Based Ent.', value: '2WB' },
            { label: 'African American', value: 'AFA' }, { label: 'Asian American', value: 'ASA' },
        ];

        return minorityTypes;
    }

    static getTaxHoldCodes() {
        const taxHoldCodes = [
            { label: 'Tax withholding code  *', value: '0' },  { label: '01 - Rent Payments', value: '01' },
            { label: '06 - Medical and Health Care Payments', value: '06' },
            { label: '07 - Nonemployee compensation ( Any type of service)', value: '07' },
            { label: '13 - Legal Settlements', value: '13' },  { label: 'Z1 - Charitable Contributions', value: 'Z1' },
            { label: 'ZZ - Goods', value: 'ZZ' }];

        return taxHoldCodes;
    }

    static getRsnTypes() {
        const rsnTypes = [
            { label: 'Reason for Supplier Creation *', value: '0' }, { label: 'Invoice Payment', value: '1' },
            { label: 'Money Donation', value: '2' }, { label: 'Sponsorship', value: '3' },
            { label: 'Reimbursement', value: '4' }, { label: 'Incentive Program', value: '0' },
            { label: 'Consultant', value: '6' } ];

        return rsnTypes;
    }

    static getContrAreas() {
        const contrAreas = [
            { label: 'US01', value: 'US01' }, { label: '0869', value: '0869' },
        ];

        return contrAreas;
    }
}
