import './styles.scss'
function TextInput ({searchValue, headleChange}){
    return (
        <>
            <input className="text-input" type="search" onChange={headleChange} value={searchValue} /> <br /><br /><br />
        </>
    )
}

export default TextInput;