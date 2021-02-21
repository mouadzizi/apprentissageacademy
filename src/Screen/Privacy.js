import React from 'react'
import { View, Text, ScrollView } from 'react-native'

export default function Privacy() {
    return (
        <ScrollView
        style={{padding: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Terms & Conditions</Text>
            <Text
            style={{textAlign: 'justify', marginTop: 10, padding: 5}}>
            By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy, or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages, or make derivative versions. The app itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to moad.</Text>
            <Text
            style={{textAlign: 'justify', marginTop: 10, padding: 5}}>
            moad is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.
            The Registre social maroc app stores and processes personal data that you have provided to us, in order to provide my Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the Registre social maroc app won’t work properly or at all.
            </Text>

            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Privacy Policy</Text>
            <Text
            style={{textAlign: 'justify', marginTop: 10, padding: 5}}>
            moad built the Registre social maroc app as a Free app. This SERVICE is provided by moad at no cost and is intended for use as is.
            This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
            If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Registre social maroc unless otherwise defined in this Privacy Policy.
            </Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Contact Us</Text>
            <Text
            style={{textAlign: 'justify', marginTop: 10, padding: 5}}>
            If you have any questions or suggestions about my Terms and Conditions, do not hesitate to contact me at mouad.zizi1@gmail.com.
            </Text>

            <Text>.</Text>
        </ScrollView>
    )
}
