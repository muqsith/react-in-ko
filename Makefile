.PHONY: docker-build
docker-build:
	docker image build -t assetgraph .

.PHONY: run-app
run-app:
	