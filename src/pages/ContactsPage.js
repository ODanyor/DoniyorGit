import React from "react";
import Contacts from "../compositions/Contacts";
import Links from "../components/Links/Links";
import Form from "../components/Form/Form";
import { Page } from "../static/StyledComponents";

const ContactsPage = ({ mode, sendContacts, client }) => {
  return (
    <Page>
      <Contacts
        mode={mode}
        contacts={<Links />}
        form={<Form sendContacts={sendContacts} client={client} />}
      />
    </Page>
  );
};

export default ContactsPage;
