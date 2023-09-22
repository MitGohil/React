function User() {
    // We create component inside the component
    function Extra() {
        return (
            <div>Insider Component</div>
        )
    }
    return (
        <div className="App">
            <h1>Hello User</h1>
            {/* Uses of insider component  */}
            <Extra />
            {Extra()}
        </div>

    );
}

export default User;