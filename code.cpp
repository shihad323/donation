
#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n,m;
    cin>>n>>m;
    vector<pair<int,int>>adj[100];
    for(int i=1;i<=m;i++){
        int u,v,w;
        cin>>u>>v>>w;
        adj[u].push_back({v,w});
        adj[v].push_back({u,w});
    }

    for(int i=1;i<=n;i++){
        cout<<"Adjacent list of "<<i<<": ";
        for(auto u:adj[i]) cout<<"Node : "<<u.first<<" And cost : "<<u.second<<" ";
        cout<<endl;
    }
}
