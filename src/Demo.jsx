import React from 'react'
import { CommunicationServiceManagementClient } from "@azure/arm-communication";
import { DefaultAzureCredential, InteractiveBrowserCredential } from "@azure/identity";
import { setLogLevel } from '@azure/logger'
// For client-side applications running in the browser, use InteractiveBrowserCredential instead of DefaultAzureCredential. See https://aka.ms/azsdk/js/identity/examples for more details.

const subscriptionId = "8:acs:943cc36e-35ac-4e4a-a8c6-904c7917365a_00000022-1a18-3ae8-f883-08482200d84e";
// const client = new CommunicationServiceManagementClient(new DefaultAzureCredential(), subscriptionId);

// For client-side applications running in the browser, use this code instead:
const credential = new InteractiveBrowserCredential({
  tenantId: "vagaro",
  clientId: "8:acs:943cc36e-35ac-4e4a-a8c6-904c7917365a_00000022-1a18-3ae8-f883-08482200d84e"
});
const client = new CommunicationServiceManagementClient(credential, subscriptionId);


// console.log(    setLogLevel("info"))

// console.log('Sumit')
// console.log(client)
// console.log(credential)

function Demo() {


  return (
    <div>
      Demo
    </div>
  )
}

export default Demo

