import React from "react";
import Link from 'next/link';
import Algoliasearch from 'algoliasearch';
import style from './search.scss'

export default class Search extends React.Component {
	constructor(props) {
        super(props);
        this.state = { 
            isSearching: false,
            results : [],
            index : null
        };
    }

	componentDidMount(){
		let client = Algoliasearch('3WBFLEGU9E', 'bf6e2254857dffd75eb927ead5d94b98');
		let indexList = this.props.index != null ? this.props.index : 'title'
		let index = client.initIndex(indexList);
		this.setState({index : index})
	}

	handleSearch(e){
		let search = e.target.value
		if(search != ""){
			this.setState({isSearching : true})
		}
		else{
			this.setState({isSearching : false})
		}
		this.state.index.search(
		  {
		    query: search,
		    attributesToRetrieve: ['title', 'url'],
		    hitsPerPage: 10,
		  },
		  (err, content) => {
		    if (err) throw err;
		    this.setState({results : content.hits});
		  }
		);
	}
	render(){
		const loadingCSS = {
			marginTop : "2rem",
			border : "1px solid #EEEEEE",
			padding : "0.5rem",
			display: this.state.isSearching? "block":"none"
		}

		const {placeholderText} = this.props
		return(
            <div className={style.content}>
				<div className={style.searchInput}>
	            <input type="text" name="search" id="search" placeholder={placeholderText ? placeholderText : 'Search resource name'} onChange={this.handleSearch.bind(this)}/>
				<img src="/static/search.png" className={style.searchImage} />
				</div>
	            <div style={loadingCSS}>
	            	{this.state.results.map((hit,index) =>
	            		<div key={index}>
	            			<a href={hit.url}>{hit.title}</a>
	            		</div>
	            	)}
	            </div>
			</div>
		)
	}

}