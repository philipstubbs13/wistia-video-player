export interface IWistiaVideo {
  data: {
    media: {
      aspectRatio: number;
      duration: number;
      hashedId: string;
      name: string;
      mediaId: number;
      projectId: number;
      seoDescription: string;
      stats: {
        averageEngagement: number;
        loadCount: number;
        playCount: number;
        uniqueLoadCount: number;
        uniquePlayCount: number;
      };
    };
  };
}
