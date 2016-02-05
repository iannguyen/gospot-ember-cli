import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  namespace: 'api',
  buildURL(modelName, id, snapshot, requestType, query) {
    if (requestType === 'queryRecord') {
      let url = this._buildURL(modelName, query.id);
      delete query.id;
      return url;
    } else {
      return this._super(modelName, id, snapshot, requestType, query);
    }
  }
});
