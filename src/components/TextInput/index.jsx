import './styles.scss'
function TextInput ({searchValue, headleChange}){
    return (
        <>
            <input type="search" onChange={headleChange} value={searchValue} /> <br /><br /><br />
        </>
    )
}

export default TextInput;