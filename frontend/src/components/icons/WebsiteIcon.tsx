import { ChakraProps, Icon } from "@chakra-ui/react";
import React from "react";

interface WebsiteIconProps extends Omit<React.SVGAttributes<SVGElement>, keyof ChakraProps>, ChakraProps {}

const WebsiteIcon: React.FC<WebsiteIconProps> = (props) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <path
      fill="currentColor"
      d="M9.51406 0.00232124C8.02656 0.0898228 6.75625 0.42576 5.49062 1.06326C2.73438 2.45388 0.775 5.03357 0.179688 8.05545C0.046875 8.72732 0 9.23826 0 9.99295C0 10.6211 0.0171875 10.8836 0.09375 11.4148C0.442188 13.8554 1.675 16.0664 3.575 17.6601C5.05938 18.9055 6.88281 19.6945 8.80313 19.9211C9.24219 19.9726 9.45312 19.9851 9.99063 19.9851C10.5516 19.9851 10.7484 19.9742 11.2328 19.9133C14.5437 19.5055 17.4438 17.4508 18.9406 14.4539C19.4188 13.4961 19.7344 12.4836 19.8875 11.4148C19.9641 10.8851 19.9813 10.6211 19.9813 10.0008C19.9813 9.37889 19.9625 9.08982 19.8875 8.57107C19.2609 4.18357 15.7969 0.719509 11.4125 0.0945091C10.9469 0.0288849 10.65 0.00700951 10.1156 0.00232124C9.83594 -0.000802994 9.56563 -0.000802994 9.51406 0.00232124ZM10.6438 1.11326C11.1469 1.64295 11.3719 1.89607 11.6734 2.26795C12.3406 3.09607 12.9266 3.9992 13.3531 4.86795C13.4812 5.12732 13.6781 5.56014 13.6703 5.56795C13.6562 5.58201 13.2656 5.69451 12.975 5.76639C12.5172 5.88201 12.1734 5.9492 11.6625 6.0242C11.4281 6.05857 11.1031 6.08982 10.6047 6.12576L10.475 6.13357V3.55545C10.475 1.51795 10.4797 0.977322 10.4938 0.977322C10.5047 0.977322 10.5719 1.03826 10.6438 1.11326ZM9.50625 3.5867V6.13514L9.39375 6.12576C9.33125 6.12107 9.17813 6.11014 9.05313 6.10232C8.58438 6.06795 8.07812 5.99764 7.57656 5.89764C7.16406 5.81482 6.4125 5.61795 6.4125 5.59295C6.4125 5.58826 6.46563 5.46482 6.53125 5.31639C7.0875 4.06326 7.85938 2.86638 8.83281 1.74763C9.05937 1.48826 9.47656 1.03982 9.49375 1.03982C9.5 1.03982 9.50625 2.1867 9.50625 3.5867ZM8.0125 1.1992C8.00469 1.21013 7.94688 1.28201 7.88125 1.36013C6.95312 2.45701 6.14062 3.75545 5.60781 4.99451C5.54531 5.14139 5.48906 5.26482 5.48438 5.26951C5.4625 5.29139 4.57031 4.88045 4.19063 4.67264C3.75469 4.43357 3.19375 4.0867 3.19375 4.05545C3.19375 4.0242 3.96875 3.2617 4.17031 3.09607C5.17031 2.26795 6.20937 1.70545 7.40313 1.34451C7.51094 1.31326 7.99375 1.18357 8.01875 1.18045C8.02188 1.18045 8.01875 1.18982 8.0125 1.1992ZM12.2719 1.26014C13.6891 1.6367 14.9266 2.30388 16.0125 3.27263C16.2203 3.46013 16.7437 3.98826 16.7734 4.04139C16.7859 4.06639 16.7656 4.08514 16.6094 4.1867C16.225 4.4367 15.7359 4.7117 15.3109 4.91639C15.025 5.05389 14.6359 5.22732 14.6094 5.22732C14.6 5.22732 14.5469 5.1242 14.4906 4.99607C13.9766 3.82107 13.2406 2.63826 12.3438 1.5492C12.2312 1.41326 12.1234 1.28045 12.1031 1.25701C12.0828 1.23201 12.0719 1.2117 12.0797 1.2117C12.0859 1.2117 12.1734 1.23357 12.2719 1.26014ZM3.22031 5.24139C3.74063 5.55389 4.25156 5.81326 4.82031 6.05545C4.9875 6.12732 5.12969 6.18982 5.13594 6.19607C5.14219 6.20232 5.13125 6.2617 5.10938 6.33045C4.94844 6.8492 4.79531 7.48826 4.71094 8.00857C4.64375 8.41482 4.56875 9.11014 4.56875 9.31795C4.56875 9.36951 4.56406 9.43357 4.55938 9.46014L4.54844 9.50857L2.76562 9.50545L0.982813 9.50076L0.9875 9.40701C1.02344 8.65389 1.20312 7.7742 1.48594 6.96951C1.72656 6.2867 2.14531 5.45857 2.51562 4.93514L2.58438 4.83826L2.7875 4.96951C2.89844 5.04295 3.09375 5.16482 3.22031 5.24139ZM17.5266 5.02889C18.0406 5.8117 18.4172 6.63357 18.6781 7.54295C18.8234 8.05232 18.9484 8.7492 18.9828 9.24295C18.9875 9.31639 18.9953 9.40545 19 9.44139L19.0078 9.50857H17.2828H15.5578L15.5469 9.30857C15.4953 8.38982 15.3125 7.37264 15.0359 6.46951C14.9922 6.32264 14.9547 6.19139 14.9531 6.17576C14.9516 6.15389 15.0156 6.12107 15.2391 6.0242C15.8469 5.76014 16.4875 5.41951 17.0547 5.05857C17.2047 4.96326 17.3406 4.87576 17.3578 4.86326C17.375 4.8492 17.3938 4.84295 17.4 4.84607C17.4078 4.85076 17.4641 4.93201 17.5266 5.02889ZM14.0547 6.59451C14.3109 7.40232 14.4688 8.18045 14.5437 9.00076C14.5563 9.13826 14.5688 9.30701 14.5719 9.37576L14.5766 9.50076L12.5266 9.50545L10.475 9.50857V8.30857V7.10857L10.7844 7.08982C11.7766 7.03045 12.8891 6.83201 13.7797 6.55701C13.8922 6.52264 13.9922 6.49607 14.0047 6.49764C14.0156 6.4992 14.0391 6.54295 14.0547 6.59451ZM6.32188 6.59295C7.24531 6.8617 8.23594 7.03201 9.19844 7.08982L9.50625 7.10857V8.30857V9.50857H7.52187H5.5375V9.43982C5.5375 9.32576 5.58281 8.81482 5.61719 8.55545C5.68125 8.06639 5.7875 7.53045 5.91406 7.0617C5.9875 6.7867 6.06719 6.5242 6.07656 6.5242C6.07969 6.5242 6.19063 6.55545 6.32188 6.59295ZM4.55938 10.5117C4.56406 10.532 4.56875 10.5898 4.56875 10.6414C4.56875 10.7726 4.60938 11.2179 4.64687 11.5164C4.74375 12.2664 4.92812 13.0836 5.1625 13.7945C5.20469 13.9242 5.23438 14.0367 5.22813 14.0414C5.22188 14.0476 5.12969 14.0883 5.02187 14.1304C4.37969 14.3867 3.65156 14.7601 2.98594 15.1773C2.84063 15.2664 2.71719 15.3351 2.71094 15.3273C2.67656 15.2898 2.46563 14.9804 2.36875 14.8258C1.74375 13.8367 1.325 12.7679 1.11719 11.6336C1.06563 11.3586 1.01406 10.9617 0.998438 10.7429C0.99375 10.6695 0.985938 10.5804 0.98125 10.5429L0.973437 10.4773H2.76094H4.55L4.55938 10.5117ZM9.50625 11.8195V13.1617L9.35469 13.1711C8.41406 13.232 7.8 13.3179 7.00156 13.5008C6.78125 13.5523 6.19844 13.707 6.17656 13.7211C6.16563 13.7273 6.04531 13.3648 5.96094 13.0711C5.74062 12.2992 5.59375 11.4508 5.54375 10.6445L5.53281 10.4773H7.52031H9.50625V11.8195ZM14.5766 10.5898C14.5422 11.0414 14.5312 11.1601 14.4969 11.4304C14.4281 11.9586 14.3172 12.5039 14.1766 13.0086C14.0953 13.2929 13.9453 13.7586 13.9344 13.7586C13.9313 13.7586 13.8484 13.7351 13.7516 13.7054C13.1984 13.5383 12.5141 13.3867 11.9125 13.2992C11.475 13.2351 11.2016 13.2086 10.6281 13.1711L10.475 13.1617V11.8195V10.4773H12.5297H14.5859L14.5766 10.5898ZM19 10.5351C18.9953 10.5679 18.9875 10.657 18.9828 10.7351C18.8984 11.9695 18.4766 13.3351 17.8313 14.4617C17.6703 14.7398 17.3422 15.2476 17.2703 15.3273C17.2641 15.3351 17.1406 15.2679 16.9953 15.1773C16.3531 14.7758 15.5641 14.3679 15.0031 14.1476C14.9266 14.1179 14.8656 14.0867 14.8656 14.0758C14.8656 14.0648 14.8797 14.0211 14.8969 13.9758C14.9516 13.8367 15.1313 13.2304 15.2031 12.9383C15.3844 12.2054 15.4969 11.4851 15.5406 10.7773L15.5594 10.4773H17.2844H19.0094L19 10.5351ZM9.50625 16.5429L9.50469 18.9383L9.33125 18.7586C8.23594 17.6226 7.27969 16.2508 6.6625 14.932C6.59375 14.782 6.53906 14.6523 6.54219 14.6429C6.55625 14.6101 7.24531 14.4367 7.725 14.3461C8.2875 14.2398 8.95625 14.1617 9.37813 14.1523L9.50625 14.1492V16.5429ZM11.1547 14.1898C11.9062 14.2633 12.725 14.4179 13.3734 14.6117C13.4516 14.6336 13.5266 14.657 13.5422 14.6601C13.5563 14.6648 13.5688 14.6758 13.5688 14.6867C13.5688 14.7226 13.1422 15.5601 12.9781 15.8445C12.4812 16.7101 11.9141 17.4929 11.1969 18.3023C10.875 18.6664 10.5391 19.0086 10.5047 19.0086C10.475 19.0086 10.475 18.9492 10.475 16.5773V14.1445L10.6984 14.1554C10.8203 14.1617 11.0266 14.1773 11.1547 14.1898ZM5.85781 15.5008C6.38281 16.5836 7.03125 17.5805 7.85 18.5633C7.96094 18.6961 8.04844 18.8055 8.04375 18.8055C8.01875 18.8055 7.67344 18.718 7.49375 18.6664C5.99688 18.232 4.68125 17.4492 3.5625 16.3226L3.34531 16.1054L3.47656 16.0195C3.9875 15.6883 4.82031 15.2617 5.45937 15.0039L5.59219 14.9508L5.62969 15.0304C5.65156 15.0742 5.75313 15.2851 5.85781 15.5008ZM14.7828 15.1133C15.275 15.3226 16.0766 15.7429 16.5047 16.0195L16.6359 16.1054L16.4109 16.332C15.4172 17.332 14.2484 18.0695 12.9375 18.5226C12.6297 18.6289 12.1 18.782 12.1 18.7633C12.1 18.7601 12.1828 18.657 12.2844 18.5351C13.1234 17.5305 13.8422 16.4117 14.35 15.3226C14.4313 15.1492 14.5063 15.0086 14.5156 15.0086C14.5266 15.0086 14.6469 15.0554 14.7828 15.1133Z"
    />
  </Icon>
);

export default WebsiteIcon;