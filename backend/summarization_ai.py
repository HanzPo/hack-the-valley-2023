import cohere 
from flask import Flask, request, jsonify
import requests

co = cohere.Client('76JzRcCMdAJaylHBzzK3EuebwmQqg2SYsUyyuN2o')
co_response = co.summarize( 
  text='{text}',
  length='auto',
  format='auto',
  model='command',
  additional_command='',
  temperature=0.3,
)

POI = 'nyiyui'
app = Flask(__name__)   
#["DEBUG"] = True
    
@app.route('/receive_repo', methods=['GET'])
def receive_repo():
    repo_url = request.args.get('url')
    commit_list = []

    if not repo_url:
        return jsonify({'ERROR': 'GitHub repository URL parameter is missing'}), 400

    parts = repo_url.rstrip('/').split('/')

    if len(parts) < 2:
        return jsonify({'ERROR': 'Invalid GitHub repository URL'}), 400
    owner, repo_name = parts[-2], parts[-1]

    try:
        api_url = f'https://api.github.com/repos/{owner}/{repo_name}/commits'
        headers = {'Accept': 'application/vnd.github.v3+json'}
        response = requests.get(api_url, headers=headers)

        if response.status_code == 200:
          commits = response.json()
        else:
          return({'ERROR': 'GitHub API request failed'}), response.status_code
        

        for commit in commits:
            if commit['author']['login'] != POI:
                commit_list.append(commit)
            else:
              commit_list.append(commit)
              break
        

        base = commit_list[-1]
        head = commit_list[0] 

        api_url = f'/repos/{owner}/{repo_name}/compare/:{base}...:{head}'

        if response.status_code == 200:
          summary = response.json()
          return co_response(summary)
        else:
          return({'ERROR': 'GitHub API request failed'}), response.status_code
    
    except requests.exceptions.RequestException as e:
        return jsonify({'ERROR': f'Failed to fetch GitHub repository information: {str(e)}'}), 500

if __name__ == '__main__':
    app.run()