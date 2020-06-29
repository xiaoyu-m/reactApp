import React, { Component } from "react";
import "./search.less";
import $http from "../../utils/http";
import SearchList from "@/components/github_search/search-list/search-list";
class Search extends Component {
  state = {
    seachTxt: "",
    initView: true,
    loading: false,
    songs: null,
    errorMsg: null,
  };
  searchInputChange = (e) => {
    let { seachTxt } = this.state;
    seachTxt = e.target.value;
    this.setState({ seachTxt });
  };
  searchSubmit = (e) => {
    let { seachTxt, initView, loading, songs, errorMsg } = this.state;
    let url = "tencent/banner";
    loading = true;
    initView = false;
    this.setState({ initView, loading, songs });
    if (seachTxt) {
      $http
        .get(url, {
          params: { keywords: seachTxt },
        })
        .then(({ data }) => {
          loading = false;
          songs = data.result.songs;
          console.log(songs);
          this.setState({ loading, songs });
        })
        .catch((res) => {
          errorMsg = res;
          this.setState({ errorMsg });
        });
    } else {
      loading = false;
      const errorMsg = "请输入歌曲";
      this.setState({ loading, errorMsg });
    }
    // seachTxt = "";
  };
  render() {
    const { seachTxt, songs, initView, loading, errorMsg } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            value={seachTxt}
            onChange={this.searchInputChange}
            placeholder="请输入搜索词"
          />
          <button onClick={this.searchSubmit}>搜索</button>
          {initView && <h1>请输入关键字搜索歌曲</h1>}
          {loading && <h1>搜索中</h1>}
          {/*{songs && <SearchList songs={songs} />}*/}
          {errorMsg && <h1>搜索歌曲失败:{errorMsg}</h1>}
        </div>
      </div>
    );
  }
}

export default Search;
