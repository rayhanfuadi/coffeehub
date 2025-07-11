import Head from "next/head"

type AppShellProps = {
    children: React.ReactNode
}

const AppShell = (props: AppShellProps) => {
    const { children } = props
    return (
        <main className="">
            <Head>
                <title>Coffehub</title>
            </Head>
            {children}
        </main>
    )
}

export default AppShell