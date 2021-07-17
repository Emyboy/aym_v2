const saveState = (state:object) => {
    try {
        const storedState = JSON.stringify(state);
        localStorage.setItem('state', storedState);
    } catch (err) {
        return undefined;
    }
};

export default saveState;
