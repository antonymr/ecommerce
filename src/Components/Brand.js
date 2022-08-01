import React from "react";
import BrandForm from "./BrandForm";
import BrandList from "./BrandList";

class Brand extends React.Component {
    state = {
        brands: [],
        currentBrand: { code: '', name: '', description: '' },
        showForm: false,
        enableAction: true
    }

    handleEdit = (item) => {
        this.setState({
            currentBrand: item,
            showForm: true,
            enableAction: false
        });
    }

    handleCancel = (item) => {
        this.setState({
            currentBrand: null,
            showForm: false,
            enableAction: true
        });
    }

    handleDelete = (item) => {
        console.log(item);
    }

    handleSave = (item) => {
        const url = `https://localhost:7052/api/Brand?code=${item.code}`;
        let options = {
            method: "PUT",
            body: JSON.stringify(item),
            headers: { "Content-Type": "application/json" }
        }
        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    showForm: false,
                    enableAction: true
                });
            });
    }



    componentDidMount() {
        const url = "https://localhost:7052/api/Brand";
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ brands: data }));
    }

    render() {
        const { brands, showForm, currentBrand, enableAction } = this.state;
        const row = { display: "flex" };
        const columnList = { flex: "70%" };
        const columnForm = { flex: "30%" };

        return (
            <>
                <div style={row}>
                    <div style={columnList}>
                        <BrandList
                            brands={brands}
                            handleEdit={this.handleEdit}
                            handleDelete={this.handleDelete}
                            enableAction={enableAction}
                        />
                    </div>
                    <div style={columnForm}>
                        {showForm && (
                            <BrandForm
                                {...currentBrand}
                                handleSave={this.handleSave}
                                handleCancel={this.handleCancel}
                            />
                        )}
                    </div>
                </div>

            </>
        );
    }
}
export default Brand;