import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../../style2/footer.css'

class Footer extends Component {
	render() {
		return (
			<footer>
				<div class="container">
					<div class="row">
						<div class="col-sm-5 copyright">
							<p>
								Copyright &copy; 2017 YOUR NAME
                    </p>
						</div>
						<div class="col-sm-2 top">
							<span id="to-top">
								<i class="fa fa-chevron-up" aria-hidden="true"></i>
							</span>
						</div>
						<div class="col-sm-5 social">
							<ul>
								<li>
									<a href="https://github.com/" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
								</li>
								<li>
									<a href="https://stackoverflow.com/" target="_blank"><i class="fa fa-stack-overflow" aria-hidden="true"></i></a>
								</li>
								<li>
									<a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
								</li>
								<li>
									<a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
								</li>
								<li>
									<a href="https://plus.google.com/" target="_blank"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer