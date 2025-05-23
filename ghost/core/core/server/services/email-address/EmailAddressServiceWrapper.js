class EmailAddressServiceWrapper {
    /**
     * @type {import('./EmailAddressService').EmailAddressService}
     */
    service;

    init() {
        if (this.service) {
            return;
        }

        const labs = require('../../../shared/labs');
        const config = require('../../../shared/config');
        const settingsHelpers = require('../settings-helpers');
        const validator = require('@tryghost/validator');

        const {EmailAddressService} = require('./EmailAddressService');

        this.service = new EmailAddressService({
            labs,
            getManagedEmailEnabled: () => {
                return config.get('hostSettings:managedEmail:enabled') ?? false;
            },
            getSendingDomain: () => {
                return config.get('hostSettings:managedEmail:sendingDomain') || null;
            },
            getDefaultEmail: () => {
                return settingsHelpers.getDefaultEmail();
            },
            isValidEmailAddress: (emailAddress) => {
                return validator.isEmail(emailAddress);
            }
        });
    }
}

module.exports = EmailAddressServiceWrapper;
