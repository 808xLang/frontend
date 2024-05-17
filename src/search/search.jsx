import React, { useState } from "react";
import { Form, Input, Button } from "reactstrap";

const SearchForm = ({ search }) => {
    const [searchWord, setSearchWord] = useState("");
    
    function submit(event) {
        event.preventDefault();
        search(searchWord.trim() || undefined);
        setSearchWord(searchWord.trim());
    }

    function change(event) {
        setSearchWord(event.target.value);
    }
    
    return (
        <div>
            <Form onSubmit={submit}>
                <Input
                    type="text"
                    name="searchWord"
                    placeholder="find companies"
                    value={searchWord}
                    onChange={change}
                />
                <Button type="submit">
                    Search
                </Button>
            </Form>
        </div>
    )
}

export default SearchForm;