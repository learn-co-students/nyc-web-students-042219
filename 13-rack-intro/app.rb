class App
  def call(environment_hash)
    status_code = 200
    header = {}
    body = ['hello']
    req = Rack::Request.new(environment_hash)
    resp = Rack::Response.new

    if req.path.match("/cohortName")
      resp.write("Home")
elsif req.path.match("/Cohort")
      resp.write("Capitalized")
    end


    return [status_code, header, resp]
  end
end
