function Section({ children, header }){
    const headerContent = () => ( header ? <h2>{header}</h2> : '' );
    return(
        <section>
        {headerContent()}
        {children}
        </section>
        );
};

export default Section;