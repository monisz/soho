import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "1dn639jv",
    dataset: "production",
    // apiVersion: '2021-08-25',
    // token: "",
    // //token: 'sanity-auth-token', // or leave blank for unauthenticated usage
    // useCdn: false, // `false` if you want to ensure fresh data
})