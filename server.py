#Use to create local host

import http.server
import socketserver

PORT = 8000
print("121")
Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
      ".js": "application/javascript",
});

server_address = ('', 8000)
httpd = http.server.HTTPServer(server_address, Handler)
httpd.serve_forever()