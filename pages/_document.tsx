import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <link href="https://fonts.googleapis.com/css?family=Muli:300,400,500,600,700,800,900&amp;display=swap" rel="stylesheet" />
                <link rel="icon" href="/icon.png" />
                <title>African Youth Minds | A.Y.M</title>
                <meta name="keywords" content="blog, new, article, music, fashion, youth, nigeria, africa, gender, culture, language, religion, new, gosip, art, computer, programming, documentation,man, woman, mind, inivation, growth, imagination, skill, talent, jobs, freelance, help, linkedin, instagram, posts, what, who, when, why, how to," />
                <meta name="description" content="African Youth Mids" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous" />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument