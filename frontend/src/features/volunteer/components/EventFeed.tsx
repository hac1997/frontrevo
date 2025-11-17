'use client';

import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, Calendar, MapPin, Bell, TrendingUp } from 'lucide-react';
import { MOCK_FEED_ITEMS } from '@/lib/services/getDataseService';
import type { FeedItem, UserStatsDTO } from '@/lib/types';

interface EventFeedProps {
  dashboardData: UserStatsDTO;
}

const EventFeed: React.FC<EventFeedProps> = ({ dashboardData }) => {
  const [feedItems] = useState<FeedItem[]>(MOCK_FEED_ITEMS);
  const notifications = dashboardData.notifications;

  const handleLike = (id: number) => {
    console.log('Liked post:', id);
  };

  const handleComment = (id: number) => {
    console.log('Comment on post:', id);
  };

  const handleShare = (id: number) => {
    console.log('Share post:', id);
  };

  const handleSave = (id: number) => {
    console.log('Save post:', id);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Notifications Banner */}
      <div className="mb-6 bg-gradient-to-r from-orange-50 to-green-50 rounded-xl p-5 border-l-4 border-primary shadow-sm">
        <div className="flex items-center mb-3">
          <div className="bg-primary p-2 rounded-lg mr-3">
            <Bell className="h-5 w-5 text-white" />
          </div>
          <p className="font-semibold text-gray-800 text-lg">Notificações Recentes</p>
        </div>
        <div className="space-y-2 ml-11">
          {notifications.map(notif => (
            <div key={notif.id} className="flex items-center justify-between text-sm bg-white rounded-lg p-3 shadow-sm">
              <span className="text-gray-700 font-medium">{notif.text}</span>
              <span className="text-gray-500 text-xs">{notif.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Feed Header */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <TrendingUp className="h-7 w-7 text-primary mr-2" />
          <h2 className="text-3xl font-bold text-gray-800">Feed de Eventos</h2>
        </div>
        <p className="text-gray-600 ml-9">Descubra oportunidades de voluntariado e acompanhe novidades</p>
      </div>

      {/* Feed Items */}
      <div className="space-y-6">
        {feedItems.map(item => (
          <div key={item.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {item.image && (
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            )}
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600">por {item.author}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>

              <p className="text-gray-700 mb-4">{item.content}</p>

              {(item.eventDate || item.location) && (
                <div className="flex space-x-6 mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  {item.eventDate && (
                    <div className="flex items-center">
                      <div className="bg-blue-500 p-2 rounded-lg mr-2">
                        <Calendar className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.eventDate}</span>
                    </div>
                  )}
                  {item.location && (
                    <div className="flex items-center">
                      <div className="bg-secondary p-2 rounded-lg mr-2">
                        <MapPin className="h-4 w-4 text-gray-800" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.location}</span>
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <div className="flex space-x-6">
                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
                  >
                    <Heart className="h-5 w-5" />
                    <span className="font-medium">{item.likes}</span>
                  </button>
                  <button
                    onClick={() => handleComment(item.id)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-medium">{item.comments}</span>
                  </button>
                  <button
                    onClick={() => handleShare(item.id)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
                <button
                  onClick={() => handleSave(item.id)}
                  className="text-gray-600 hover:text-secondary transition-colors"
                >
                  <Bookmark className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-8 text-center">
        <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:shadow-lg transition-all duration-200 font-bold">
          Carregar Mais Eventos
        </button>
      </div>
    </div>
  );
};

export default EventFeed;