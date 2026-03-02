import Menu from "../components/Menu";
import Canvas from "../components/Canvas";

const GraphPage = () => {
    return (
        <>
            <header className="header">
                <Menu></Menu>
            </header>
            <main>
                <Canvas></Canvas>
            </main>
        </>
    );
};

export default GraphPage;
