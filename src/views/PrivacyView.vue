<script lang="ts" setup>
import PrivacyQuestion from '../components/PrivacyQuestion.vue';
import PrivacyAnswer from '../components/PrivacyAnswer.vue';
import Ot from '../components/icons/Ot.vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n({
    useScope: 'global'
})
</script>

<template>
    <div>
        <router-link to="/">
            <Ot class="logo opentrust" />
        </router-link>
    </div>
    <div class="container">
        <h1>Opentrust Privacy Policy</h1>
        <p>
            Opentrust "the App” provides store reviews "the Service" to merchants who use Shopify to power their stores.
            This Privacy Policy describes how personal information is collected, used, and shared when you install or
            use the App in connection with your Shopify-supported store.
        </p>
        <h3>
            Personal Information the App Collects
        </h3>
        <p>
            When you install the App, we are automatically able to access certain types of information from your Shopify
            account: Protected customer data, Protected customer fields
        </p>
        <p>
            Additionally, we collect the following types of personal information from you and/or your customers once you
            have installed the App: Information about you and others who may access the App on behalf of your store,
            such as your name, address, email address, phone number, and billing information; Information about
            individuals who visit your store, such as their IP address, web browser details, time zone, information
            about the cookies installed on the particular device and the email address of the customer that places an
            order through your store; and Information about individuals who write reviews through the App, such as their
            name, email address, and the content of their review.
        </p>
        <p>
            We collect personal information directly from the relevant individual, through your Shopify account, 
            or using the following technologies: “Cookies” are data files that are placed on your device or
            computer and often include an anonymous unique identifier. For more information about cookies, and how to
            disable cookies, visit http://www.allaboutcookies.org. “Log files” track actions occurring on the Site, and
            collect data including your IP address, browser type, Internet service provider, referring/exit pages, and
            date/time stamps. “Web beacons,” “tags,” and “pixels” are electronic files used to record information about
            how you browse the Site.
        </p>
        <h3>
            How Do We Use Your Personal Information?
        </h3>
        <p>
            We use the personal information we collect from you and your customers in order to provide the Service and
            to operate the App. Additionally, we use this personal information to: Communicate with
            you; Optimize or improve the App; and Provide you with information or advertising relating to our products
            or services.
        </p>
        <h3>
            Sharing Your Personal Information
        </h3>
        <p>
            We may share your Personal Information with third parties to help us provide the Service, including:
            service providers, contractors, and affiliates who perform services on our behalf; and
            other users of the App, to the extent necessary to facilitate the Service.
        </p>
        <p>
            Finally, we may also share your Personal Information to comply with applicable laws and regulations, to
            respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise
            protect our rights.
        </p>
        <p>
            Your Rights If you are a European
            resident, you have the right to access personal information we hold about you and to ask that your personal
            information be corrected, updated, or deleted. If you would like to exercise this right, please contact us
            through the contact information below.
        </p>
        <p>
            Additionally, if you are a European resident we note that we are processing your information in order to
            fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise
            to pursue our legitimate business interests listed above. Additionally, please note that your information
            will be transferred outside of Europe, including to Canada and the United States.
        </p>
        <h3>
            Data Retention
        </h3>
        <p>
            When you place an order through the Site, we will maintain your Order Information for our
            records unless and until you ask us to delete this information.
        </p>
        <p>
            Changes We may update this privacy policy from time to time in order to reflect, for example, changes to our
            practices or for other operational, legal or regulatory reasons.
        </p>
        <p>
            Contact Us For more information about our privacy practices, if you have questions, or if you would like to
            make a complaint, please contact us by e-mail at info@opentrust.it or by mail using the details
            provided below:
        </p>
        <p>
            Simone Simonella<br />
            Via Paolo Emilio Treves 4<br />
            30020 San Donà di Piave (VE)<br />
            Italy
        </p>
    </div>
</template>

<style scoped lang="scss">
.container {
    max-width: 800px;
    margin: auto;

    h3, p {
        text-align: left;
    }

    .divider {
        margin-top: 100px;
    }
}

.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;

    &:hover {
        filter: drop-shadow(0 0 2em #424242aa);
    }

    &.opentrust {
        fill: #fff;
    }
}

@media (prefers-color-scheme: light) {
    .logo {
        &.opentrust {
            fill: #2563EB;
        }

        &:hover {
            filter: drop-shadow(0 0 2em #E0E0E0aa);
        }
    }
}
</style>