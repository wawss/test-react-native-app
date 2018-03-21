const apiDomain = 'http://api.cakeland.com/m/v1/';
let apiPath = {
  cakes: {
    list: '/item/<%=pageNo%>?city=<%=city%>&brand=<%=brand%>&type=<%=type%>&status=<%=status%>&name=<%=name%>&pageSize=<%=pageSize%>&ext=<%=ext%>'
  }
};
export {apiPath, apiDomain}
