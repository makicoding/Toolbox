import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";

/*
Functional Component - useState() and useEffect()
useState() is the most important React Hook introduced as part of React 16.8 (ES2019), stable version released on February 6, 2019.
Note that not all older React projects will support useState().
All React projects version 16.3 and above will supprt useState().
Most browsers should be able to support useState (because React manages the app itself. So as long as the 
React app itself is version 16.3 or above, when you deploy the React project, React converts the app to be
both ES5 and ES6(ES2015), and so should be compatible with most browsers)
*/
function Search() {
  const [search, setSearch] = useState("Wikipedia");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!search) {
      return;
    }

    API.searchTerms(search)
      .then(res => {
        if (res.data.length === 0) {
          throw new Error("No results found.");
        }
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        setTitle(res.data[1]);
        setDescription(res.data[2][0]);
        setUrl(res.data[3][0]);
      })
      .catch(err => setError(err));
  }, [search]);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <h1 className="text-center">Search For Anything on Wikipedia</h1>
        <Alert type="danger" style={{ opacity: error ? 1 : 0, marginBottom: 10 }}>
          {error}
        </Alert>
        <SearchForm
          handleInputChange={handleInputChange}
          results={search}
        />
        <SearchResults title={title} description={description} url={url} />
      </Container>
    </div>
  );
}



// // Class Component - the below code does the same thing as the above code:

// class Search extends Component {
//   state = {
//     search: "Wikipedia",
//     title: "",
//     description: "",
//     url: "",
//     error: ""
//   };

//   // When the component mounts, update the title to be Wikipedia Searcher
//   componentDidMount() {
//     document.title = "Wikipedia Searcher";

//     API.searchTerms(this.state.search)
//       .then(res => {
//         if (res.data.length === 0) {
//           throw new Error("No results found.");
//         }
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({
//           title: res.data[1],
//           description: res.data[2][0],
//           url: res.data[3][0],
//           error: ""
//         });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   }

//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (!this.state.search) {
//       return;
//     }
//     API.searchTerms(this.state.search)
//       .then(res => {
//         if (res.data.length === 0) {
//           throw new Error("No results found.");
//         }
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({
//           title: res.data[1],
//           description: res.data[2][0],
//           url: res.data[3][0],
//           error: ""
//         });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };
//   render() {
//     return (
//       <div>
//         <Container style={{ minHeight: "100vh" }}>
//           <h1 className="text-center">Search For Anything on Wikipedia</h1>
//           <Alert type="danger" style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}>
//             {this.state.error}
//           </Alert>
//           <SearchForm
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//             results={this.state.search}
//           />
//           <SearchResults
//             title={this.state.title}
//             description={this.state.description}
//             url={this.state.url}
//           />
//         </Container>
//       </div>
//     );
//   }
// }

export default Search;