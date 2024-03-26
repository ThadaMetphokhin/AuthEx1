import NextAuth from "next-auth/next";
import FacebookProvider from "next-auth/providers/facebook";
import GithubProvider from "next-auth/providers/github";
const handler =  NextAuth({
    providers: [
        FacebookProvider({ 
            clientId: process.env.FACEBOOK_CLIENT_ID as string,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        })],
        
        callbacks: {
            async redirect({ url, baseUrl }) {
              // Allows relative callback URLs
              if (url.startsWith("/")) return `${baseUrl}${url}`
              // Allows callback URLs on the same origin
              else if (new URL(url).origin === baseUrl) return url
              return baseUrl
            }
          }
})
export { handler as GET, handler as POST }