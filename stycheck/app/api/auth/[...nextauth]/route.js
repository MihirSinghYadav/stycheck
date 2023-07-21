import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),

    // GoogleProvider({
    //   clientId: 515708069111-cin56r9chve3d9js0h4lre6q6hp5dprb.apps.googleusercontent.com ,
    //   clientSecret: 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,
    // }),

  ],
});

export { handler as GET, handler as POST };
