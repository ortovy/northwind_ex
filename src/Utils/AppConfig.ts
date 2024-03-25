class AppConfig {
	public productUrl = "http://localhost:3030/api/products/"; // End Url with a slash(/)
    public workersUrl = "http://localhost:3030/api/employees/";
    public registerUrl = "http://localhost:3030/api/register/";
    public loginUrl = "http://localhost:3030/api/login/";
    public categoriesUrl = "http://localhost:3030/api/categories/";
}

export const appConfig = new AppConfig();
